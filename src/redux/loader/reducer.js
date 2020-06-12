import { LOADER } from "../actions";

const INIT_STATE = false;

export default (state = INIT_STATE, { type }) => {
    switch (type) {
        case LOADER: {
            return !state;
        }
        default:
            return state;
    }
};
