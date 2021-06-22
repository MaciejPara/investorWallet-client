import { MENU_CHANGE } from "../actions";

const menuItems = [
    {
        label: "Wallet",
        name: "home",
        path: "",
    },
    {
        label: "Favourites",
        name: "favourites",
        path: "/favourites",
    },
    {
        label: "Currencies",
        name: "currencies",
        path: "/currencies",
    },
    {
        label: "Crypto",
        name: "crypto",
        path: "/crypto",
    },
    {
        label: "Metals",
        name: "metals",
        path: "/metals",
    },
    {
        label: "Stocks",
        name: "stocks",
        path: "/stocks",
    },
];

const findCurrentPath = () => {
    const { pathname } = window.location;

    let currentPath = "home";

    menuItems.forEach(({ path, name }) => {
        if (pathname.indexOf(path) > -1) currentPath = name;
    });

    return currentPath;
};

const INIT_STATE = {
    items: menuItems,
    current: findCurrentPath(),
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case MENU_CHANGE: {
            return { ...state, current: action.payload };
        }
        default: {
            return { ...state };
        }
    }
};
