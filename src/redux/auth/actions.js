import { LOGIN_USER } from "../actions";

export const loginUser = (user, history) => ({
    type: LOGIN_USER,
    payload: { user, history },
});
