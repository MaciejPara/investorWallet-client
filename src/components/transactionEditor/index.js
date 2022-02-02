import React from "react";
import { Formik } from "formik";
import Autocomplete from "react-autocomplete";

const TransactionEditor = ({
    handleValidation,
    handleSubmit,
    whatAutocomplete,
    autocompleteStyles,
    autocompleteItems,
    setWhatAutocomplete,
    fromAutocompleteItems,
    fromAutocomplete,
    setFromAutocomplete,
    setNewTransaction,
    handleCancel,
    edit,
}) => {
    return (
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
                            {!edit && (
                                <div className={`formField ${errors.what}`}>
                                    <label htmlFor="what">What</label>
                                    <Autocomplete
                                        wrapperStyle={{
                                            width: "100%",
                                        }}
                                        menuStyle={autocompleteStyles}
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
                                                className={"autocomplete-item"}
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
                            )}
                            <div className={`formField ${errors.count}`}>
                                <label htmlFor="count">Count</label>
                                <input
                                    type="number"
                                    name="count"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.count}
                                />
                            </div>
                            {!edit && (
                                <div className={`formField ${errors.from}`}>
                                    <label htmlFor="from">From</label>
                                    <Autocomplete
                                        wrapperStyle={{
                                            width: "100%",
                                        }}
                                        menuStyle={autocompleteStyles}
                                        getItemValue={(item) => item.label}
                                        items={fromAutocompleteItems.filter(
                                            ({ value }) =>
                                                value.includes(
                                                    fromAutocomplete.toLowerCase()
                                                )
                                        )}
                                        renderItem={({ label }) => (
                                            <div
                                                className={"autocomplete-item"}
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
                            )}
                            <div className={`formField ${errors.price}`}>
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
                                    {!edit ? "Add" : "Edit"}
                                </button>
                                <button
                                    className={"formButton formButton-cancel"}
                                    type="cancel"
                                    onClick={() => {
                                        if (handleCancel) {
                                            handleCancel();
                                        } else {
                                            setNewTransaction(false);
                                        }
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default TransactionEditor;
