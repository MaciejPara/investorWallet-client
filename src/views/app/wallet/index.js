import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
    GET_CATEGORY_DATA,
    SET_INIT_FLAG,
} from "../../../redux/collections/actions";
import FetchClient from "../../../utils/FetchClient";
import TransactionEditor from "../../../components/transactionEditor";
import { store } from "react-notifications-component";
import { NavLink } from "react-router-dom";

const WalletComponent = () => {
    const dispatch = useDispatch();
    const [transactions, setTransactions] = useState([]);
    const [isNewTransaction, setNewTransaction] = useState(false);
    const [whatFilter, setWhatFilter] = useState("");
    const [fromFilter, setFromFilter] = useState("");
    const [autocompleteItems, setAutocompleteItems] = useState([]);
    const [fromAutocompleteItems, setFromAutocompleteItems] = useState([]);
    const [whatAutocomplete, setWhatAutocomplete] = useState("");
    const [fromAutocomplete, setFromAutocomplete] = useState("");
    const [amountOfWallet, setAmountOfWallet] = useState(0);
    const [startAmountOfWallet, setStartAmountOfWallet] = useState(0);
    const [editId, setEditId] = useState();
    const [autocompleteStyles, setAutocompleteStyles] = useState({
        borderRadius: "3px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        background: "rgba(255, 255, 255, 0.9)",
        padding: "2px 0",
        fontSize: "90%",
        position: "fixed",
        overflow: "auto",
        maxHeight: "200px",
    });

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
        let currentResult = 0;
        let priceResult = 0;

        transactions.forEach(({ price, currentPrice }) => {
            currentResult += parseFloat(currentPrice);
            priceResult += parseFloat(price);
        });

        setAmountOfWallet(currentResult.toFixed(2));
        setStartAmountOfWallet(priceResult.toFixed(2));
    }, [transactions]);

    const userId = useSelector(({ ...store }) => store.authUser.user.id);

    useEffect(() => {
        if (userId) {
            (async () => {
                const result = await FetchClient.get({
                    url: `/investments?filter=${JSON.stringify({
                        userId: userId,
                    })}`,
                });

                if (result.length !== transactions.length) {
                    setTransactions(
                        result.map((item) => {
                            const currentPrice = getCurrentPrice(item);

                            return {
                                ...item,
                                id: item._id,
                                currentPrice,
                                currentPricePercentage: calcPercentage(
                                    item.price,
                                    currentPrice
                                ),
                                createdAt: moment(
                                    item.createdAt.toString()
                                ).format("DD.MM.YYYY - HH:mm:ss"),
                            };
                        })
                    );
                }
            })();
        }
    }, [transactions, autocompleteItems, userId]);

    const getCurrentPrice = (item) => {
        const found = autocompleteItems.find(
            ({ value }) => item.what.toLowerCase() === value
        );
        const foundFrom = autocompleteItems.find(
            ({ value }) => item.from.toLowerCase() === value
        );

        return ((found?.rate * item.count) / foundFrom?.rate || 0).toFixed(2);
    };

    const handleAddTransaction = () => {
        setNewTransaction(true);
    };

    const handleSubmit = async (data) => {
        const investment = {
            id: Date.now(),
            ...data,
            currentPrice: getCurrentPrice(data),
        };

        try {
            const result = await FetchClient.post({
                url: "/investment",
                body: {
                    userId,
                    ...investment,
                },
            });

            investment.id = result?._id || investment.id;
        } catch (e) {
            console.error(e);
        }

        setNewTransaction(false);
        setTransactions([
            ...transactions,
            {
                ...investment,
                currentPricePercentage: calcPercentage(
                    investment.price,
                    investment.currentPrice
                ),
                createdAt: moment(new Date().toString()).format(
                    "DD.MM.YYYY - HH:mm:ss"
                ),
            },
        ]);
    };

    const handleEdit = async (data) => {
        const investment = transactions.find(({ id }) => id === editId);

        const updateData = {
            count: data.count,
            price: data.price,
        };

        try {
            const { ok } =
                (await FetchClient.update({
                    url: `/investment/${investment.id}`,
                    body: updateData,
                })) || {};

            if (ok) {
                const currentPrice = getCurrentPrice({
                    ...investment,
                    ...updateData,
                });

                setEditId();
                setTransactions(
                    transactions.map((item) => {
                        if (item.id === investment.id) {
                            item = {
                                ...item,
                                ...updateData,
                                currentPrice,
                                currentPricePercentage: calcPercentage(
                                    data.price,
                                    currentPrice
                                ),
                            };
                        }

                        return item;
                    })
                );

                store.addNotification({
                    title: "Update",
                    message: "Investment successfully updated",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
            } else {
                store.addNotification({
                    title: "Update",
                    message: "Update error, please try again",
                    type: "error",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
            }
        } catch (e) {
            console.error(e);
        }
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

    const handleEditValidation = (values) => {
        const errors = {};

        ["count", "price"].forEach((item) => {
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
        return ((currentPrice / price) * 100 - 100 || 0).toFixed(1);
    };

    const getDifferenceClass = (price) => {
        return price > 0 ? "plus" : "minus";
    };

    const walletPercentage = calcPercentage(
        startAmountOfWallet,
        amountOfWallet
    );

    return (
        <div>
            <h2 className={`sectionTitle`}>
                Wallet ammount:{" "}
                <span
                    className={`difference ${getDifferenceClass(
                        walletPercentage
                    )}`}
                >
                    {amountOfWallet || 0} | {walletPercentage}%
                </span>
            </h2>

            <button
                className={"addTransactionButton"}
                onClick={handleAddTransaction}
            >
                <span>Add investment</span>{" "}
                <i className="fa-solid fa-plus addIcon" />
            </button>
            {isNewTransaction && (
                <TransactionEditor
                    handleValidation={(e) => handleValidation(e)}
                    handleSubmit={(e) => handleSubmit(e)}
                    whatAutocomplete={whatAutocomplete}
                    autocompleteStyles={autocompleteStyles}
                    autocompleteItems={autocompleteItems}
                    setWhatAutocomplete={setWhatAutocomplete}
                    fromAutocompleteItems={fromAutocompleteItems}
                    fromAutocomplete={fromAutocomplete}
                    setFromAutocomplete={setFromAutocomplete}
                    setNewTransaction={setNewTransaction}
                />
            )}
            {transactions.length ? (
                <h3 className={"sectionTitle mt-4"}>Investments:</h3>
            ) : (
                ""
            )}
            <div className={"transactionContainer tableContainer"}>
                {transactions.length ? (
                    <div>
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
                                <div key={key}>
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
                                            className={`cell m-auto ${getDifferenceClass(
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
                                                className="fas fa-pencil-alt"
                                                onClick={() => setEditId(id)}
                                            />
                                            <NavLink
                                                className="d-inline-flex mr-1 ml-1"
                                                to={`/app/details/${id}`}
                                            >
                                                <i className="fas fa-info-circle ml-4" />
                                            </NavLink>
                                        </span>
                                    </div>
                                    {id === editId && (
                                        <TransactionEditor
                                            edit={true}
                                            handleValidation={(e) =>
                                                handleEditValidation(e)
                                            }
                                            handleSubmit={(e) => handleEdit(e)}
                                            handleCancel={() => setEditId()}
                                            whatAutocomplete={whatAutocomplete}
                                            autocompleteStyles={
                                                autocompleteStyles
                                            }
                                            autocompleteItems={
                                                autocompleteItems
                                            }
                                            setWhatAutocomplete={
                                                setWhatAutocomplete
                                            }
                                            fromAutocompleteItems={
                                                fromAutocompleteItems
                                            }
                                            fromAutocomplete={fromAutocomplete}
                                            setFromAutocomplete={
                                                setFromAutocomplete
                                            }
                                            setNewTransaction={
                                                setNewTransaction
                                            }
                                        />
                                    )}
                                </div>
                            )
                        )}
                </div>
            </div>
        </div>
    );
};

export default WalletComponent;
