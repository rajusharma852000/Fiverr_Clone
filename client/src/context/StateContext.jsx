import { createContext, useContext, useReducer } from "react";
import { Toaster } from 'react-hot-toast';

export const StateContext = createContext();

//StateProvider receives these vales from _app.jsx: "initialState", "reducer" and , "children"
export const StateProvider = ({ initialState, reducer, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
            <Toaster/>
        </StateContext.Provider>
    );
}

export const useStateProvider = () => {
    return useContext(StateContext);
}