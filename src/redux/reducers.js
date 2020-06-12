import { combineReducers } from "redux";

import authUser from "./auth/reducer";
import collections from "./collections/reducer";
import menu from "./menu/reducer";
import settings from "./settings/reducer";
import loader from "./loader/reducer";

const reducers = combineReducers({
    authUser,
    collections,
    menu,
    settings,
    loader,
});

export default reducers;
