import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../../components/content";
import { GET_CATEGORY_DATA } from "../../../redux/actions";

const Category = (props) => {
    const { model } = props;

    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (model && model.shouldRefresh()) {
            model.setRefresh(false);
            dispatch({
                type: GET_CATEGORY_DATA,
                payload: {
                    url: model?.getAllUrl(),
                },
            });
        }
    }, []);

    useSelector(({ collections }) => {
        const newData = collections[model?.getCategoryName()]?.data;

        if (JSON.stringify(newData) !== JSON.stringify(data)) {
            setData(newData);
        }
    });

    return (
        <div>
            {model ? (
                <Content {...props} data={data} />
            ) : (
                <span>working on it..</span>
            )}
        </div>
    );
};

export default Category;
