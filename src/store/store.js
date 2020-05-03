import React, { useReducer, createContext } from "react";
export const HomeContext = createContext();

const initialState = {
    loading: false,
    error: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "HOME_DATA_SUCCESS":
        case "PAGE2_DATA_SUCCESS":
            return { ...state, values: action.payload, loading: false }
        case "HOME_DATA_LOADING":
        case "PAGE2_DATA_LOADING":
            return { ...state, loading: true };
        default:
            throw new Error();
    }
};

export const HomeDataContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <HomeContext.Provider value={[state, dispatch]}>
            {props.children}
        </HomeContext.Provider>
    );
};