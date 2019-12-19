import { combineReducers } from "redux";

import currencyReducer from "Features/Currency_Exchanges/redux/currencyReducer";

export default combineReducers({
  currency: currencyReducer
});
