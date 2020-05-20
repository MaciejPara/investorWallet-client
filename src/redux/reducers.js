import { combineReducers } from "redux";

import authUser from "./auth/reducer";
import collections from "./collections/reducer";
import menu from "./menu/reducer";

const reducers = combineReducers({
    authUser,
    collections,
    menu,
});

export default reducers;
