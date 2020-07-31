import axios from 'axios';

export const FETCH_RICKNMORTY = "FETCH_RICKNMORTY";
export const FETCH_RICKNMORTY_SUCCESS = "FETCH_RICKNMORTY_SUCCESS";
export const FETCH_RICKNMORTY_FAILURE = "RETCH_RICKNMORTY_FAILURE";

export const getRicknMorty = () => dispatch => {

    dispatch({type: FETCH_RICKNMORTY});
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
          console.log(res.data);
          dispatch({type: FETCH_RICKNMORTY_SUCCESS, payload: res.data.results});
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
            type: FETCH_RICKNMORTY_FAILURE, 
            payload: `${err.response.status} ${err.response.data}`
        });
      });
    };