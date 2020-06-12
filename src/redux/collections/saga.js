import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { GET_CATEGORY_DATA, SET_DATA } from "./actions";
import FetchClient from "../../utils/FetchClient";

export function* watchInitializeCollections() {
    yield takeEvery(GET_CATEGORY_DATA, init);
}

export function* init({ payload: { url, category } }) {
    const result = yield FetchClient.get({ url });

    yield put({
        type: SET_DATA,
        payload: {
            category,
            data: result[0]?.rates, //@todo optimize !!!
        },
    });
}

export default function* rootSaga() {
    yield all([fork(watchInitializeCollections)]);
}
