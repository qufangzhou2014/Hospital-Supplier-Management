import { createSlice } from '@reduxjs/toolkit'

export const vendorSlice = createSlice({
    name: 'vendor',
    initialState: {
        vendor: {},
    },
    reducers: {
        setVendor: (state, action) => {
            state.vendor = action.payload;
        },
        resetVendor: (state) => {
            state.vendor = {};
        }
    },
});

export const {setVendor, resetVendor} = vendorSlice.actions;

export default vendorSlice.reducer;