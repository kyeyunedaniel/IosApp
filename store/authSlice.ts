import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  access_token: string | null;
  user_id: number | null;
  role_id: number | null;
  status: number | null;
  message: string | null;
}

const initialState: AuthState = {
  access_token: null,
  user_id: null,
  role_id: null,
  status: null,
  message: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<Partial<AuthState>>) => {
      return { ...state, ...action.payload };
    },
    logout: (state) => {
      return { ...initialState };
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
