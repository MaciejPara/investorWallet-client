import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import Loader from "./components/loader";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";

const App = React.lazy(() => import(/* webpackChunkName: "App" */ "./App"));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
