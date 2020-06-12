import React from "react";
import Select from "react-select";

//@todo check warning bugs
const CustomSelect = ({
    handleChange,
    handleBlur,
    defaultValue,
    options,
    menuPlacement,
}) => {
    const colourStyles = {
        menuList: (provided, state) => ({
            ...provided,
            paddingTop: 0,
            paddingBottom: 0,
        }),
        menu: (defaultStyles) => {
            return {
                ...defaultStyles,
                backgroundColor: "#282c34",
                WebkitBoxShadow: "0px 0px 3px 1px rgba(255,255,255,0.8)",
                MozBoxShadow: "0px 0px 3px 1px rgba(255,255,255,0.8)",
                boxShadow: "0px 0px 3px 1px rgba(255,255,255,0.8)",
                borderRadius: 0,
                color: "#ffffff",
                ":hover": {
                    WebkitBoxShadow: "0px 0px 3px 1px #c0ff00",
                    MozBoxShadow: "0px 0px 3px 1px #c0ff00",
                    boxShadow: "0px 0px 3px 1px #c0ff00",
                    color: "#c0ff00",
                },
            };
        },
        input: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: "#ffffff",
                ":hover": {
                    color: "#c0ff00",
                },
            };
        },
        singleValue: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: "#ffffff",
                ":hover": {
                    color: "#c0ff00",
                },
            };
        },
        control: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: "transparent",
            border: isFocused ? "1px solid #c0ff00" : "1px solid #c0ff00",
            borderRadius: 0,
            boxShadow: "none",
            ":hover": {
                border: "1px solid #c0ff00",
            },
            outline: "none",
        }),
        dropdownIndicator: (styles, { data }) => {
            return {
                ...styles,
                color: "#fff",
                cursor: "pointer",
                ":hover": {
                    color: "#c0ff00",
                },
            };
        },
        indicatorSeparator: (styles) => {
            return {
                ...styles,
                backgroundColor: "#c0ff00",
            };
        },
        option: (styles, { isSelected }) => {
            return {
                ...styles,
                backgroundColor: isSelected ? "rgb(170, 240, 0)" : "#282c34",
                color: isSelected ? "#282c34" : "#c0ff00",
                cursor: "pointer",
                ":hover": {
                    color: "#282c34",
                    backgroundColor: "#c0ff00",
                },
                "": {
                    color: "#282c34",
                    backgroundColor: "#c0ff00",
                },
            };
        },
    };

    return (
        <Select
            menuPlacement={menuPlacement || "down"}
            className={"baseOptionSelect"}
            defaultValue={defaultValue}
            options={options}
            onChange={handleChange || null}
            onBlur={handleBlur || null}
            styles={colourStyles}
        />
    );
};

export default CustomSelect;
