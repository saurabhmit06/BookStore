import {fetchBooksFailure , fetchBooksSuccess,fetchBooksBegin} from '../action/bookAction'
import goodReadsJSONResponse from "goodreads-json-api";
import axios from "axios";
const https = require('https');

const yqlUrl = "http://query.yahooapis.com/v1/public/yql";

export function fetchBooks() {
    let goodReadsURL = `https://www.goodreads.com/author/list/18541?format=xml&key=2BoqtHGGdmAuaCgOCfaq4g`;
    let q = `select * from xml where url="${goodReadsURL}"`;
    return dispatch => {
      dispatch(fetchBooksBegin());
      return axios.get(yqlUrl, { 
        params: { 
            q: q, 
            format: "json" 
        }
       })
        .then(json => {            
          dispatch(fetchBooksSuccess(json.data.query.results.GoodreadsResponse.author.books));
          return json.products;
        })
        .catch(error => dispatch(fetchBooksFailure(error)));
    };
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }



  