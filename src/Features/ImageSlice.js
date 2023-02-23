import { createSlice } from '@reduxjs/toolkit';

const ImageSlice = createSlice({
    name: 'Image',
    initialState: {},
    reducers: {
        props: (state, action) => {
            state.register = action.payload.register;
            state.errors = action.payload.errors;
            console.log(state);
        },
    },
});
const { reducer, actions } = ImageSlice;
export const { props } = actions;
export default reducer;
