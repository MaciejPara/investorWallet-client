import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Content = ({ data = [], match: { url } }) => {
    const [state, setState] = useState({});

    const handleFavouriteChange = ({
        currentTarget: {
            dataset: { value },
        },
    }) => {
        console.log(value);

        setState({ ...state, [value]: !state[value] });
    };

    return (
        <div className={"contentContainer"}>
            <div className={"row w-100 m-auto d-flex"}>
                <span className={"tableHeader"} />
                <span className={"tableHeader"}>Name</span>
                <span className={"tableHeader m-auto"}>Last Price</span>
                <span className={"tableHeader"} />
            </div>
            <div className={"d-flex w-100 m-auto flex-column"}>
                {data.map(({ name, rate }, key) => (
                    <div key={key} className={"row w-100 m-auto d-flex"}>
                        <span
                            className={"cell"}
                            data-value={name}
                            onClick={handleFavouriteChange}
                        >
                            {state[name] ? (
                                <i className="fas fa-star favourite active" />
                            ) : (
                                <i className="far fa-star favourite" />
                            )}
                        </span>
                        <span className={"cell"}>{name}</span>
                        <span className={"cell m-auto"}>{rate}</span>
                        <span className={"cell"}>
                            <Link to={`${url}`}>
                                <i className="fas fa-ellipsis-h" />
                            </Link>
                        </span>
                    </div>
                ))}
            </div>
            {/*{data.map(({ name, rate }, key) => (*/}
            {/*<p key={key}>*/}
            {/*{base} {moment.utc(createdAt).format("YYYY-MM-DD HH:mm:ss")}{" "}*/}
            {/*{moment.utc(date).format("YYYY-MM-DD HH:mm:ss")}*/}
            {/*<Link to={`${url}/${_id}`}>details</Link>*/}
            {/*</p>*/}
            {/*))}*/}
        </div>
    );
};

export default Content;
