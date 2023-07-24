import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";

const rootReducers: ReducersMapObject<StateSchema> = {

};

export const store = configureStore({
    reducer: rootReducers,
})