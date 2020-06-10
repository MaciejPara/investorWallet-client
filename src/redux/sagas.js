import { all } from "redux-saga/effects";
import authSagas from "./auth/saga";
import collectionsSagas from "./collections/saga";

export default function* rootSaga(getState) {
    yield all([authSagas(), collectionsSagas()]);
}
