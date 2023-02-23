import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: { isLogin: false, userData: {} },
    reducers: {
        isLogin: (state, action) => {
            const data = action.payload;
            state.isLogin = true;
            state.userData = data;
        },
        isLogOut: (state, action) => {
            state.isLogin = false;
            state.userData = action.payload;
        },
    },
});
const { reducer, actions } = UserSlice;
export const { isLogin, isLogOut } = actions;
export default reducer;
