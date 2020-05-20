import { NavLink } from "react-router-dom";
import React from "react";
import { useStore, useDispatch } from "react-redux";
import { MENU_CHANGE } from "../../redux/actions";

const Navbar = ({ match: { url } }) => {
    const {
        menu: { items, current },
    } = useStore().getState();

    const dispatch = useDispatch();

    return (
        <nav className={"navigation"}>
            {items.map(({ label, name, path }, key) => (
                <NavLink
                    onClick={() => {
                        dispatch({ type: MENU_CHANGE, payload: name });
                    }}
                    key={key}
                    to={`${url}${path}`}
                    className={`${key === 0 ? `ml-auto` : ""} ${
                        key === items.length - 1 ? `mr-auto` : ""
                    } ${current === name ? "activeClass" : ""} `}
                >
                    {label}
                </NavLink>
            ))}
            <div className={"logoutContainer"}>
                <NavLink to={`/logout`}>
                    <i className="fas fa-sign-out-alt" />
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
