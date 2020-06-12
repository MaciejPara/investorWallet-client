import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import Content from "../../../components/content";
import { GET_CATEGORY_DATA } from "../../../redux/actions";
import Loader from "../../../components/loader";

const Category = (props) => {
    const { model } = props;

    const dispatch = useDispatch();
    const { settings } = useStore().getState();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (model?.shouldRefresh()) {
            model.setRefresh(false);
            dispatch({
                type: GET_CATEGORY_DATA,
                payload: {
                    url: model.getAllUrl(settings?.base),
                    category: model.getCategoryName(),
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
                <>
                    {data !== null ? (
                        <Content {...props} data={data} />
                    ) : (
                        <Loader />
                    )}
                </>
            ) : (
                <span>working on it..</span>
            )}
        </div>
    );
};

export default Category;
