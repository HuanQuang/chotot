import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Features/UserSlice';
import ImageReducer from '../Features/ImageSlice';
const Store = configureStore({
    reducer: {
        user: UserReducer,
        image: ImageReducer,
    },
});
export default Store;
