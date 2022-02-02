import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "react-redux";
import FetchClient from "../../../utils/FetchClient";
import CustomSelect from "../../../components/customSelect";
import moment from "moment";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const InvestmentComponent = ({
    history,
    match: { params: { id } = {} } = {},
    ...props
}) => {
    const [delayOptions] = useState([
        { value: 7, label: "1 week" },
        { value: 14, label: "2 weeks" },
        { value: 30, label: "30 days" },
        { value: 60, label: "60 days" },
        { value: 90, label: "90 days" },
        { value: 120, label: "120 days" },
        { value: 365, label: "1 year" },
    ]);
    const [dateDelayInit, setDateDelayInit] = useState(30);

    const getDateFromNow = (days = -dateDelayInit) => {
        return moment().add(days, "days").format("YYYY-MM-DD");
    };

    const { authUser: { user: { id: userId } = {} } = {} } =
        useStore().getState();
    const [startDate, setStartDate] = useState(getDateFromNow());
    const [endDate, setEndDate] = useState(getDateFromNow(0));
    const [investment, setInvestment] = useState();
    const [dateDelay, setDateDelay] = useState(-dateDelayInit);
    const [data, setData] = useState([]);
    const [simpleView, setSimpleView] = useState(false);
    const [currency, setCurrency] = useState();

    useEffect(() => {
        if (id?.length === 3) {
            setCurrency(id);
        } else {
            (async () => {
                const result = await FetchClient.get({
                    url: `/investments?filter=${JSON.stringify({
                        userId: userId,
                    })}`,
                });
                const found = result.find(({ _id: i }) => i === id);
                if (found) {
                    setCurrency(found.what.toLowerCase());
                    setInvestment(found);
                } else {
                    setSimpleView(true);
                }
            })();
        }
    }, []);

    useEffect(() => {
        (async () => {
            if (investment || currency) {
                try {
                    const res = await fetch(
                        `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/
                ${startDate}/${endDate}?format=JSON`
                    );
                    const json = await res.json();

                    setData(
                        json.rates.map(
                            ({ effectiveDate: date, mid: price }) => ({
                                date,
                                price,
                            })
                        )
                    );
                    setSimpleView(false);
                } catch (e) {
                    setSimpleView(true);
                }
            }
        })();
    }, [dateDelay, investment, currency, dateDelayInit]);

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `${
                    investment?.what || currency
                } price between ${startDate} - ${endDate}`,
            },
        },
    };

    const lineData = {
        labels: data.map(({ date }) => date),
        datasets: [
            {
                label: "Price",
                data: data.map(({ price }) => price),
                borderColor: "#c0ff00",
                backgroundColor: "#c0ff00",
            },
        ],
    };

    return (
        <div className={"text-left detailsView"}>
            <button onClick={() => history.goBack()}>Go Back</button>
            {simpleView ? (
                <div className={"text-center"}>
                    <h4>Sorry, details for this instrument cannot be seen..</h4>
                </div>
            ) : (
                <>
                    {investment && (
                        <>
                            <div className={"detailsData"}>
                                <p className={"detailsData-item"}>
                                    <span className={"label"}>
                                        What you bought:
                                    </span>{" "}
                                    {investment.what}
                                </p>
                                <p className={"detailsData-item"}>
                                    <span className={"label"}>
                                        From what you bought:
                                    </span>{" "}
                                    {investment.from}
                                </p>
                                <p className={"detailsData-item"}>
                                    <span className={"label"}>
                                        Price you paid:
                                    </span>{" "}
                                    {investment.price}
                                </p>
                                <p className={"detailsData-item"}>
                                    <span className={"label"}>
                                        Amount you get:
                                    </span>{" "}
                                    {investment.count}
                                </p>
                                <p className={"detailsData-item"}>
                                    <span className={"label"}>
                                        Date of transaction:
                                    </span>{" "}
                                    {moment(investment.createdAt).format(
                                        "YYYY-MM-DD hh:mm:ss"
                                    )}
                                </p>
                                <p className={"detailsData-item"}>
                                    <span className={"label"}>
                                        Date of update:
                                    </span>{" "}
                                    {moment(investment.updatedAt).format(
                                        "YYYY-MM-DD hh:mm:ss"
                                    )}
                                </p>
                            </div>
                        </>
                    )}
                    {(currency || investment) && (
                        <div className={"chartContainer mt-3"}>
                            <div className={"text-right mb-5"}>
                                <CustomSelect
                                    className={"monthsSelect"}
                                    menuPlacement={"top"}
                                    defaultValue={delayOptions.find(
                                        ({ value }) => value === dateDelayInit
                                    )}
                                    options={delayOptions}
                                    handleChange={({ value }) => {
                                        setDateDelay(-value);
                                        setDateDelayInit(value);
                                        setStartDate(getDateFromNow(0));
                                        setEndDate(getDateFromNow(-value));
                                    }}
                                />
                                <button
                                    className={"formButton ml-4"}
                                    onClick={() => {
                                        setStartDate(
                                            getDateFromNow(
                                                dateDelay - dateDelayInit
                                            )
                                        );
                                        setEndDate(getDateFromNow(dateDelay));
                                        setDateDelay(dateDelay - dateDelayInit);
                                    }}
                                >
                                    move backward
                                </button>

                                <button
                                    disabled={dateDelay >= -dateDelayInit}
                                    className={"formButton"}
                                    onClick={() => {
                                        const days = dateDelay + dateDelayInit;
                                        setDateDelay(days);
                                        setStartDate(getDateFromNow(days));
                                        setEndDate(
                                            getDateFromNow(days + dateDelayInit)
                                        );
                                    }}
                                >
                                    move forward
                                </button>
                            </div>
                            <Line options={lineOptions} data={lineData} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default InvestmentComponent;
