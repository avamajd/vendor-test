import { takeEvery, call, put } from "redux-saga/effects";
import {
  GET_FILTERS, GET_FILTERS_COMPLETE, GET_FILTERS_ERROR
} from "../constants";

const baseUrl = "https://snappfood.ir/mobile/v2/restaurant/filters";

//******************************************************

export async function fetchFilters() {
  let uri = `${baseUrl}`;

  return await fetch(uri, {
    method: "GET",
  }).then(res => res.json());
}

//************************************************************

function* getFiltersRequest(action) {
  try {

    const res = yield call(fetchFilters);
    yield put({ type: GET_FILTERS_COMPLETE, filters: res.data.restaurantFilterTypes });
  } catch (err) {
    yield put({ type: GET_FILTERS_ERROR, err });
  }
}

/**********************************************************************/

export const filterSaga = [
  takeEvery(GET_FILTERS, getFiltersRequest)
];
