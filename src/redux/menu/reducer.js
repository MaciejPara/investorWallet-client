import { MENU_CHANGE } from "../actions";

const menuItems = [
    {
        label: "Home",
        name: "home",
        path: "",
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

        default:
            return { ...state };
    }
};
