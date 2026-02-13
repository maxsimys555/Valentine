import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NameState = {
  value: string;
};

const initialState: NameState = {
  value: "Любима",
};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;