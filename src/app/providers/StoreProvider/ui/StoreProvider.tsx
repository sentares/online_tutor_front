import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {store} from "../config/Store";


interface StoreProviderProps {
    children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children
    } = props
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
