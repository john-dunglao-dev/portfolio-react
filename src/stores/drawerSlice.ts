import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface DrawerState {
  modals: string[]; // todo: define proper modal type
}

const initialState: DrawerState = {
  modals: [],
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    createModalInstance: (state: DrawerState) => {
      state.modals.push('new modal #' + state.modals.length);
    },
    deleteModalInstance: (
      state: DrawerState,
      action: PayloadAction<number>
    ) => {
      state.modals.splice(action.payload, 1);
    },
  },
});

export const { createModalInstance, deleteModalInstance } = drawerSlice.actions;

export default drawerSlice.reducer;
