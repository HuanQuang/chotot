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
        isLogOut: (state) => {
            state.isLogin = false;
            state.userData = {};
        },
    },
});
const { reducer, actions } = UserSlice;
export const { isLogin, isLogOut } = actions;
export default reducer;
