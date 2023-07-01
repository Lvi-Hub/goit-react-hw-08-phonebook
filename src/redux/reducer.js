import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filtersSlice';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});
