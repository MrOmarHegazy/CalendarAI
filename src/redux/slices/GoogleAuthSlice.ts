import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  }
});

export const { setUser, clearUser, setAuthError } = authSlice.actions;
export default authSlice.reducer;