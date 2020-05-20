import React from "react";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const CurrenciesView = ({ match: { url } }) => {
    const {
        collections: { currencies },
    } = useStore().getState();

    const currenciesData = currencies?.model.getData();

    // const columns = ["name", "rate", "base", "createdAt", "date"];

    return (
        <div>
            <div>
                <p>
                    <span className={"p-3"}>base </span>
                    <span className={"p-3"}>createdAt </span>
                    <span className={"p-3"}>rate date </span>
                    <span className={"p-3"}>details</span>
                </p>
                {currenciesData.map(
                    ({ _id, base, createdAt, rates, date }, key) => (
                        <p key={key}>
                            {base}{" "}
                            {moment
                                .utc(createdAt)
                                .format("YYYY-MM-DD HH:mm:ss")}{" "}
                            {moment.utc(date).format("YYYY-MM-DD HH:mm:ss")}
                            <Link to={`${url}/${_id}`}>details</Link>
                        </p>
                    )
                )}
            </div>
        </div>
    );
};

export default CurrenciesView;
