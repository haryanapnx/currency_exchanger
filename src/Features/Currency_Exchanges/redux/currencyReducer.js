import * as constant from './currencyConstant';

const initialState = {
  listCurrency: null,
  rates:null,
  isLoading: false,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_CURRENCY:
      return {
        ...state,
        listCurrency: action.data,
        rates: action.data.rates,
      };
    case constant.LOADING_CURRENCY:
      return {...state, isLoading: action.bool};
    default:
      return state;
  }
};

export default currencyReducer;