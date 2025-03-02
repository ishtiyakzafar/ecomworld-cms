import { configureStore } from '@reduxjs/toolkit';
import authReducer, { actionLogin } from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    store.dispatch(actionLogin(user));
}

export default store;