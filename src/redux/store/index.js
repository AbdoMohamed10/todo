import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import todoSlice from "../slices/todoSlice";
import themeSlice from "../slices/themeSlice";

const persistConfig = {
    key: 'root',
    storage
};

export const rootReducer = combineReducers({
    todo: todoSlice,
    theme: themeSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);
