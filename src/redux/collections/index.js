import Model from "../../utils/Model";

export default {
    currencies: {
        model: new Model({
            name: "currencyRate",
            plural: "currencyRates",
        }),
        data: [],
    },
};
