import loaderGif from "../../img/loader.gif";
import React from "react";

const Loader = () => (
    <div className={"overlay"}>
        <img className={"loader"} src={loaderGif} alt="loader" />
    </div>
);

export default Loader;
