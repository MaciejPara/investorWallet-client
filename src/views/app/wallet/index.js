import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Autocomplete from "react-autocomplete";
import {
    GET_CATEGORY_DATA,
    SET_INIT_FLAG,
} from "../../../redux/collections/actions";
import FetchClient from "../../../utils/FetchClient";

const WalletComponent = () => {
    const dispatch = useDispatch();
    const [transactions, setTransactions] = useState([]);
    const [isNewTransaction, setNewTransaction] = useState(true);
    const [whatFilter, setWhatFilter] = useState("");
    const [fromFilter, setFromFilter] = useState("");
    const [autocompleteItems, setAutocompleteItems] = useState([]);
    const [fromAutocompleteItems, setFromAutocompleteItems] = useState([]);
    const [whatAutocomplete, setWhatAutocomplete] = useState("");
    const [fromAutocomplete, setFromAutocomplete] = useState("");
    const [amountOfWallet, setAmountOfWallet] = useState(0);

    useSelector(({ collections, settings: { base } }) => {
        if (!collections.initFlag) {
            dispatch({
                type: SET_INIT_FLAG,
            });

            collections.categories.forEach((item) => {
                const model = collections[item]?.model;

                dispatch({
                    type: GET_CATEGORY_DATA,
                    payload: {
                        url: model.getAllUrl(base),
                        category: model.getCategoryName(),
                    },
                });
            });
        }
    });

    useSelector(
        ({
            collections: { categories, ...collections },
            settings: { base },
        }) => {
            let whatData = [
                { label: base, value: base.toLowerCase(), rate: 1 },
            ];
            let fromData = [
                { label: base, value: base.toLowerCase(), rate: 1 },
            ];

            categories?.forEach((item) => {
                collections[item].data?.forEach((el) => {
                    const result = {
                        label: el.name,
                        value: el.name.toLowerCase(),
                        ...el,
                    };

                    whatData.push(result);

                    if (item === "currencies") {
                        fromData.push(result);
                    }
                });
            });

            if (
                JSON.stringify(autocompleteItems) !== JSON.stringify(whatData)
            ) {
                setAutocompleteItems(whatData);
            }

            if (
                JSON.stringify(fromAutocompleteItems) !==
                JSON.stringify(fromData)
            ) {
                setFromAutocompleteItems(fromData);
            }
        }
    );

    useEffect(() => {
        let result = 0;

        transactions.forEach(({ currentPrice }) => (result += currentPrice));

        setAmountOfWallet(result);
    }, [transactions]);

    useEffect(() => {
        (async () => {
            const result = await FetchClient.get({
                url: `/investments?filter=${JSON.stringify({
                    userId: userId,
                })}`,
            });

            if (result.length !== transactions.length) {
                setTransactions(
                    result.map((item) => {
                        const found = autocompleteItems.find(
                            ({ value }) => item.what.toLowerCase() === value
                        );

                        const currentPrice = found?.rate * item.count || 0;

                        return {
                            ...item,
                            id: item._id,
                            currentPrice,
                            currentPricePercentage: calcPercentage(
                                item.price,
                                currentPrice
                            ),
                        };
                    })
                );
            }
        })();
    }, [transactions, autocompleteItems]);

    const userId = useSelector(({ ...store }) => store.authUser.user._id);

    const handleAddTransaction = () => {
        setNewTransaction(true);
    };

    const handleSubmit = async (data) => {
        const investment = {
            id: Date.now(),
            ...data,
            currentPrice: data.price,
        };

        try {
            const result = await FetchClient.post({
                url: "/investment",
                body: {
                    userId,
                    ...investment,
                },
            });

            console.log(">>> ", result);
        } catch (e) {
            console.error(e);
        }

        setNewTransaction(false);
        setTransactions([
            ...transactions,
            {
                ...investment,
                createdAt: moment(new Date().toString()).format(
                    "DD.MM.YYYY - HH:mm:ss"
                ),
            },
        ]);
    };

    const filterTransactions = ({ what, from }) => {
        return (
            what.toLowerCase().includes(whatFilter) &&
            from.toLowerCase().includes(fromFilter)
        );
    };

    const handleValidation = (values) => {
        const errors = {};

        ["what", "count", "from", "price"].forEach((item) => {
            if (!values[item]) {
                errors[item] = "Required";
            }
        });

        return errors;
    };

    const handleInvestmentDelete = async (id) => {
        try {
            await FetchClient.delete({
                url: `/investment/${id}`,
            });
        } catch (e) {
            console.error(e);
        }

        setTransactions([...transactions.filter(({ id: tId }) => tId !== id)]);
    };

    const calcPercentage = (price, currentPrice) => {
        return ((currentPrice / price) * 100 - 100).toFixed(1);
    };

    const getDifferenceClass = (price) => {
        return price > 0 ? "plus" : "minus";
    };

    return (
        <div>
            <h2 className={"sectionTitle"}>
                Amount in the wallet: {amountOfWallet || 0}
            </h2>

            <button
                className={"addTransactionButton"}
                onClick={handleAddTransaction}
            >
                <span>Add investment</span>{" "}
                <i className="fa-solid fa-plus addIcon" />
            </button>
            {isNewTransaction && (
                <div className={"newTransaction"}>
                    <Formik
                        initialValues={{
                            what: "",
                            count: "",
                            from: "",
                            price: "",
                        }}
                        validate={handleValidation}
                        onSubmit={handleSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form
                                className={"newTransaction-form"}
                                onSubmit={handleSubmit}
                            >
                                <div className={"fieldsContainer"}>
                                    <div className={`formField ${errors.what}`}>
                                        <label htmlFor="what">What</label>
                                        <Autocomplete
                                            wrapperStyle={{
                                                width: "100%",
                                            }}
                                            getItemValue={(item) => item.label}
                                            items={autocompleteItems.filter(
                                                ({ value }) =>
                                                    value.includes(
                                                        whatAutocomplete.toLowerCase()
                                                    )
                                            )}
                                            placeholder={"What"}
                                            renderItem={({ label }) => (
                                                <div
                                                    className={
                                                        "autocomplete-item"
                                                    }
                                                >
                                                    {label}
                                                </div>
                                            )}
                                            value={whatAutocomplete}
                                            onChange={({
                                                currentTarget: { value },
                                            }) => {
                                                setWhatAutocomplete(value);
                                            }}
                                            onSelect={(val) => {
                                                handleChange({
                                                    target: {
                                                        name: "what",
                                                        value: val,
                                                    },
                                                    currentTarget: {
                                                        name: "what",
                                                        value: val,
                                                    },
                                                });
                                                setWhatAutocomplete(val);
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={`formField ${errors.count}`}
                                    >
                                        <label htmlFor="count">Count</label>
                                        <input
                                            type="number"
                                            name="count"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.count}
                                        />
                                    </div>
                                    <div className={`formField ${errors.from}`}>
                                        <label htmlFor="from">From</label>
                                        <Autocomplete
                                            wrapperStyle={{
                                                width: "100%",
                                            }}
                                            getItemValue={(item) => item.label}
                                            items={fromAutocompleteItems.filter(
                                                ({ value }) =>
                                                    value.includes(
                                                        fromAutocomplete.toLowerCase()
                                                    )
                                            )}
                                            renderItem={({ label }) => (
                                                <div
                                                    className={
                                                        "autocomplete-item"
                                                    }
                                                >
                                                    {label}
                                                </div>
                                            )}
                                            value={fromAutocomplete}
                                            onChange={({
                                                currentTarget: { value },
                                            }) => {
                                                setFromAutocomplete(value);
                                            }}
                                            onSelect={(val) => {
                                                handleChange({
                                                    target: {
                                                        name: "from",
                                                        value: val,
                                                    },
                                                    currentTarget: {
                                                        name: "from",
                                                        value: val,
                                                    },
                                                });
                                                setFromAutocomplete(val);
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={`formField ${errors.price}`}
                                    >
                                        <label htmlFor="price">Price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.price}
                                        />
                                    </div>
                                    <div className={"buttonsContainer"}>
                                        <button
                                            className={"formButton"}
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Add
                                        </button>
                                        <button
                                            className={
                                                "formButton formButton-cancel"
                                            }
                                            type="cancel"
                                            onClick={() =>
                                                setNewTransaction(false)
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            )}
            <div className={"transactionContainer tableContainer"}>
                {transactions.length ? (
                    <div>
                        <h3 className={"sectionTitle"}>Investments:</h3>
                        <div
                            className={
                                "tableHeaderContainer row w-100 m-auto d-flex"
                            }
                        >
                            <span className={"tableHeader"}>When</span>
                            <span className={"tableHeader"}>
                                <input
                                    type="text"
                                    placeholder={"What 🔍"}
                                    value={whatFilter}
                                    onChange={({ currentTarget: { value } }) =>
                                        setWhatFilter(value.toLowerCase())
                                    }
                                />
                            </span>
                            <span className={"tableHeader"}>Count</span>
                            <span className={"tableHeader"}>
                                <input
                                    type="text"
                                    placeholder={"From 🔍"}
                                    value={fromFilter}
                                    onChange={({ currentTarget: { value } }) =>
                                        setFromFilter(value.toLowerCase())
                                    }
                                />
                            </span>
                            <span className={"tableHeader m-auto"}>Price</span>
                            <span className={"tableHeader m-auto"}>
                                Current Price
                            </span>
                            <span className={"tableHeader m-auto"} />
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <div className={"d-flex w-100 m-auto flex-column"}>
                    {transactions
                        .filter(filterTransactions)
                        .map(
                            (
                                {
                                    id,
                                    what,
                                    count,
                                    from,
                                    price,
                                    createdAt,
                                    currentPrice,
                                    currentPricePercentage,
                                },
                                key
                            ) => (
                                <div
                                    key={key}
                                    className={
                                        "transaction categoryItem row w-100 m-auto d-flex"
                                    }
                                >
                                    <span className={"cell date"}>
                                        {createdAt}
                                    </span>
                                    <span className={"cell"}>{what}</span>
                                    <span className={"cell"}>{count}</span>
                                    <span className={"cell"}>{from}</span>
                                    <span className={"cell"}>{price}</span>
                                    <span
                                        className={`cell m-auto difference ${getDifferenceClass(
                                            currentPricePercentage
                                        )} currentPrice`}
                                    >
                                        <span>{currentPrice} | </span>
                                        <span className={"percentage"}>
                                            {currentPricePercentage}%
                                        </span>
                                    </span>
                                    <span className={"cell actions"}>
                                        <i
                                            className="far fa-trash-alt"
                                            onClick={() =>
                                                handleInvestmentDelete(id)
                                            }
                                        />
                                        <i
                                            className="fas fa-info-circle ml-4"
                                            onClick={() =>
                                                alert(`details ${id}`)
                                            }
                                        />
                                    </span>
                                </div>
                            )
                        )}
                </div>
            </div>
        </div>
    );
};

export default WalletComponent;
