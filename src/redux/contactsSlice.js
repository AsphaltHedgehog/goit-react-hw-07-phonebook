import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { name: 'Vazdo', number: 123133123123, id: '213asda'},
  { name: 'Alex', number: 312313123, id: 'dsadadas'},
  { name: 'Serghii', number: 312313131321, id: 'sadasdasd'},
  
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (info) => {
        return {
          payload: {
            name: info.name,
            number: info.number,
            id: nanoid()
          },
        };
      },
    },

    deleteContact: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  addContact,
  deleteContact
} =
  contactsSlice.actions;
  
export const contactsReducer = contactsSlice.reducer;