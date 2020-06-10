import { SET_DATA } from "../actions";
import collections from "./index";

const INIT_STATE = {
    categories: ["currencies", "crypto", "metals"],
    ...collections,
};

export default (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case SET_DATA: {
            return {
                ...state,
                [payload.category]: {
                    ...state[payload.category],
                    data: payload.data,
                },
            };
        }
        default:
            return { ...state };
    }
};
