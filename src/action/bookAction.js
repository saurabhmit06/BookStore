import {FETCH_BOOKS_BEGIN,FETCH_BOOKS_SUCCESS,FETCH_BOOKS_FAILURE} from "../constants/book"

export const fetchBooksBegin = () => ({
    type: FETCH_BOOKS_BEGIN
  });
  
  export const fetchBooksSuccess = books => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: { books }
  });
  
  export const fetchBooksFailure = error => ({
    type: FETCH_BOOKS_FAILURE,
    payload: { error }
  });