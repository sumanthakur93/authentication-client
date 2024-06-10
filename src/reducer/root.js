import { configureStore } from '@reduxjs/toolkit';
// import { authService } from './authFeature/authServices';
import authSlices from './authFeature/authSlices';

const store = configureStore({
    reducer:{
        auth:authSlices,
    }
})

export default store;