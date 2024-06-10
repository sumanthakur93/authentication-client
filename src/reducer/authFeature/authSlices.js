import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authService } from "./authServices";

const initialState = {
    user:null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
};


export const userSingIn = createAsyncThunk(
    "auth/sing-in",
    async (props, thunkAPI) => {
        try {
            
            return await authService.signIn({props})
            
        }
        catch (error) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const userSingOut = createAsyncThunk(
    "auth/sing-out",
    async ( thunkAPI) => {
        try {
            return await authService.signOut()
            
        }
        catch (error) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const userSingUp = createAsyncThunk(
    "auth/sing-up",
    async (props, thunkAPI) => {
        try {
            return await authService.signUp({props})
            
        }
        catch (error) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const userSingInByToken = createAsyncThunk(
    "auth/sing-in-by-token",
    async (props, thunkAPI) => {
        try {
            return await authService.signInByToken();
            
        }
        catch (error) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const forgetPassword = createAsyncThunk(
    "auth/forget-passowrd",
    async (props, thunkAPI) => {
        try {
            return await authService.forgetPassword({props})
            
        }
        catch (error) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);


const authSlices = createSlice({
    name:'auth',
    initialState,

    reducers:{
          resetUserState: (state) => {
             state.user = null;
             state.isSuccess = false;
             state.isError = false;
             state.isLoading = false;
             state.message = "";
          },
    },

    extraReducers: (builder)=>{
        builder
              // services for singin by credentials
            .addCase(userSingIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userSingIn.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.user = action.payload;
                state.isSuccess = true;
            })
            .addCase(userSingIn.rejected,(state)=>{
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
            })

            // services for sign up 
            .addCase(userSingUp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userSingUp.fulfilled, (state, action)=> {
                state.isLoading = false;
                // state.user = action.payload;
                state.isSuccess = true;
            })
            .addCase(userSingUp.rejected,(state)=>{
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
            })

            // services for sign out
            .addCase(userSingOut.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(userSingOut.fulfilled, (state, action)=> {
                state.isLoading = false;
                 state.user = null;
                state.isSuccess = true;
            })
            .addCase(userSingOut.rejected,(state)=>{
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
            })
            
            // services for sign in by token
            .addCase(userSingInByToken.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userSingInByToken.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.user = action.payload;
                state.isSuccess = true;
            })
            .addCase(userSingInByToken.rejected,(state)=>{
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
            })


            // services for creating new password

            .addCase(forgetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgetPassword.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(forgetPassword.rejected,(state)=>{
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
            })
            

            
    }
});

export  const { resetUserState } = authSlices.actions;


export default authSlices.reducer