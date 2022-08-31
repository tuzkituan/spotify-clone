import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoading {
  type: string;
  value: boolean;
}

const initialState: {
  [k: string]: boolean;
} = {};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<ILoading>) => {
      const { type, value } = action.payload;
      state[type] = value;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

// selectors
// export const getMe = (state) => state.user.user;
export const loadingEffect = (state: any) => state || {};

export default loadingSlice.reducer;
