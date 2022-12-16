import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Features/UserSlice';

const Store = configureStore({
    reducer: {
        user: UserReducer,
    },
});
export default Store;
