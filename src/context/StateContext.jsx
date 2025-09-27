import { createContext, useState } from 'react';
export const StateContext = createContext();

export const StateProvider = ({ children }) => {

    const [stateValue, setStateValue] = useState('');

    function clickHeaderBtn(value) {
        setStateValue(value);
    }

    console.log(stateValue);
    return (
        <StateContext.Provider value={{ clickHeaderBtn, stateValue }}>
            {children}
        </StateContext.Provider>
    )
}