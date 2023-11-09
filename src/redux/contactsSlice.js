import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    fetchingInProgress(state) { 
      state.isLoading = true;
      state.error = null;
    },
    
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },

    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload
    }, 
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} =
  contactsSlice.actions;
  
export const contactsReducer = contactsSlice.reducer;