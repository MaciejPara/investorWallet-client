import React from "react";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Content from "../../../components/content";

const CurrenciesView = (props) => {
    const {
        match: { url },
    } = props;

    const {
        collections: { currencies },
    } = useStore().getState();

    const currenciesData = currencies?.model.getData();
    const data = currenciesData[0]?.rates;

    console.log(data);

    // const columns = ["name", "rate", "base", "createdAt", "date"];

    return (
        <div>
            <Content {...props} data={data} />
        </div>
    );
};

export default CurrenciesView;
