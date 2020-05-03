import React, { useEffect, useContext } from "react";
import { HomeContext } from '../../store/store';
import { PAGE2_API_URL } from "../../constants";

import Slider from '../Slider/Slider';
import Sections from '../Sections/Sections';
import "./Page2.css";

const Page2 = () => {
    const [state, dispatch] = useContext(HomeContext);

    const loadingPage2Data = () => {
        dispatch({
            type: "PAGE2_DATA_LOADING"
        });
    };

    const getPage2Data = data => {
        dispatch({
            type: "PAGE2_DATA_SUCCESS",
            payload: data
        });
    };

    useEffect(() => {
        loadingPage2Data();
        fetch(PAGE2_API_URL, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                getPage2Data(data);
            });
    }, []);

    return (
        <>

            {
                state.loading ? (
                    <div>
                        ...loading
                    </div>
                )
                    : <div className="page2">
                        <Slider />
                        <Sections />
                    </div>
            }
        </>
    );
};

export default Page2;