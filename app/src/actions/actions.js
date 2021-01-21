import axios from "axios";

export const FETCH_CHAR_START = "FETCH_CHAR_START";
export const FETCH_CHAR_FAIL = "FETCH_CHAR_FAIL";
export const FETCH_CHAR_SUCCESS = "FETCH_CHAR_SUCCESS";

export const getCharacter = (value) => (dispatch) => {
  dispatch({ type: FETCH_CHAR_START });
  axios.get(`https://xivapi.com/character/${value}`)
  .then((res) => {
    dispatch({ type: FETCH_CHAR_SUCCESS, payload:res.data.Character });
  })
  .catch((err)=>{
      dispatch({type:FETCH_CHAR_FAIL, payload:err.response.code});
  });
};
