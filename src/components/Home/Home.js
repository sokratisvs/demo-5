import React, { useEffect, useContext } from "react";
import { HomeContext } from '../../store/store';
import { HOME_API_URL } from "../../constants";

import Slider from '../Slider/Slider';
import Sections from '../Sections/Sections';
import "./Home.css";

const Home = () => {
    const [state, dispatch] = useContext(HomeContext);

    const loadingHomeData = () => {
        dispatch({
            type: "HOME_DATA_LOADING"
        });
    };

    const getHomeData = data => {
        dispatch({
            type: "HOME_DATA_SUCCESS",
            payload: data
        });
    };

    useEffect(() => {
        loadingHomeData();
        fetch(HOME_API_URL, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                getHomeData(data);
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
                    : <div className="home">
                        <Slider />
                        <Sections />
                    </div>
            }
        </>
    );
};

export default Home;
