import Model from "../../utils/Model";

export default {
    currencies: {
        model: new Model({
            name: "currencyRate",
            plural: "currencyRates",
            categoryName: "currencies",
        }),
        data: [],
    },
    crypto: {
        model: new Model({
            name: "cryptoRate",
            plural: "cryptoRates",
            categoryName: "crypto",
        }),
        data: [],
    },
    metals: {
        model: new Model({
            name: "metalRate",
            plural: "metalRates",
            categoryName: "metals",
        }),
        data: [],
    },
    stocks: {
        model: new Model({
            name: "stockRate",
            plural: "stockRates",
            categoryName: "stocks",
        }),
        data: [],
    },
};
