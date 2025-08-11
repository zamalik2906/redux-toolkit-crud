import { configureStore } from '@reduxjs/toolkit';
import userDetailReducer from '../features/userDetailSlice'

export const store = configureStore({
    reducer: {
        app: userDetailReducer,
    },
})