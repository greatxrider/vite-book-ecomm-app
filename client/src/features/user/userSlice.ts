import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";
import './UserLoginForm.module.css';

type User = {
    id: number;
    username: string;
    password: string;
    avatar: string;
}

export interface UserSliceState {
    currentUser: User | null;
};

const initialState: UserSliceState = {
    currentUser: null,
};

export const userSlice = createAppSlice({
    name: 'user',
    initialState,
    reducers: create => ({
        setCurrentUser: create.reducer((state, action: PayloadAction<User | null>) => {
            // Update the currentUser property in the state with action.payload
            return {
                ...state,
                currentUser: action.payload
            };
        }),
    }),
    selectors: {
        selectCurrentUser: user => user.currentUser,
    },
});

// export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const { selectCurrentUser } = userSlice.selectors;

// export const selectCurrentUser = (state: { user: UserSliceState }) => state.user.currentUser;
