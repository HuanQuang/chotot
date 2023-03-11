import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        isResult: (state, action) => {
            const arr = action.payload;
            state.result = arr;
        },
    },
});
const { reducer, actions } = SearchSlice;
export const { isResult } = actions;
export default reducer;
