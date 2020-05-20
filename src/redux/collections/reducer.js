import {} from "../actions";
import collections from "./index";

const INIT_STATE = {
    ...collections,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};
