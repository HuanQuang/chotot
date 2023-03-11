import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Features/UserSlice';
import ImageReducer from '../Features/ImageSlice';
import SearchReducer from '../Features/SearchSlice';
const Store = configureStore({
    reducer: {
        user: UserReducer,
        image: ImageReducer,
        search: SearchReducer,
    },
});
export default Store;
