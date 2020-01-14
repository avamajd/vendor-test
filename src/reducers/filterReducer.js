import {
  GET_FILTERS, GET_FILTERS_COMPLETE, GET_FILTERS_ERROR
} from "../constants";

const initialState = {
  isFetching: false,
  filters: [],
  error: ""
};

//****************************

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FILTERS:
      return {
        ...state,
        isFetching: true
      };
    case GET_FILTERS_COMPLETE:
      return {
        ...state,
        isFetching: false,
        filters: action.filters
      };
    case GET_FILTERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    //****************************

    default:
      return state;
  }
}
