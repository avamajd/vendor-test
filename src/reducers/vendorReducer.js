import {
  GET_VENDOR_LIST, GET_VENDOR_LIST_COMPLETE, GET_VENDOR_LIST_ERROR
} from "../constants";

const initialState = {
  isFetching: false,
  vendors: {},
  error: ""
};

//****************************

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VENDOR_LIST:
      return {
        ...state,
        isFetching: true
      };
    case GET_VENDOR_LIST_COMPLETE:
      return {
        ...state,
        isFetching: false,
        vendors: action.vendors
      };
    case GET_VENDOR_LIST_ERROR:
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
