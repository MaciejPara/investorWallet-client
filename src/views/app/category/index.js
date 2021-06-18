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
    const [updateDate, setUpdateDate] = useState("");

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
        const { data: newData, updateDate: newUpdateDate = "" } =
            collections[model?.getCategoryName()] || {};

        if (JSON.stringify(newData) !== JSON.stringify(data)) {
            setData(newData);
        }
        if (newUpdateDate !== updateDate) {
            setUpdateDate(newUpdateDate);
        }
    });

    return (
        <div>
            {model ? (
                <>
                    {data !== null ? (
                        <>
                            {data?.length > 0 ? (
                                <Content
                                    {...props}
                                    data={data}
                                    updateDate={updateDate}
                                />
                            ) : (
                                <p>No results..</p>
                            )}
                        </>
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
