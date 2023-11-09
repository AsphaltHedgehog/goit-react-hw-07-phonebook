import axios from "axios";

import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice";

axios.defaults.baseURL = "https://654ce68877200d6ba859a550.mockapi.io";

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress())
    const response = await axios.get('/contacts');

    dispatch(fetchingSuccess(response.data))
  } catch (e) {
    dispatch(fetchingError(e.message));
  };
}