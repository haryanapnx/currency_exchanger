import * as constants from "./currencyConstant";
import { apiCall } from "commons/apiCall";

export const setLoading = (bool)=> {
  return {
    type: constants.LOADING_CURRENCY,
    bool
  };
}

export const getCurrency = (baseTo = "") => async dispatch => {
  dispatch(setLoading(true));
  const res = await dispatch(
    apiCall({
      method: "get",
      url: `latest?base=USD${baseTo}`
    })
  );
  if (res) {
    const { data } = res;
    dispatch(setLoading(false));
    return dispatch({
      type: constants.GET_CURRENCY,
      data
    });
  } else {
    dispatch(setLoading(false));
  }
};
