import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isLogin: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        resetUser: (state) => {
            state.user = {};
        },
        setIsLogin: (state) => {
            state.isLogin = true;
        },
        resetIsLogin: (state) => {
            state.isLogin = false;
        },
    },
});

export const {setUser, resetUser, setIsLogin, resetIsLogin} = userSlice.actions;

export default userSlice.reducer;