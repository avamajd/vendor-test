import { takeEvery, call, put } from "redux-saga/effects";
import {
  GET_VENDOR_LIST, GET_VENDOR_LIST_COMPLETE, GET_VENDOR_LIST_ERROR
} from "../constants";

const baseUrl = "https://snappfood.ir/mobile/v2/restaurant/vendors-list";

//******************************************************

export async function fetchVendorList(sorting, filter, service) {
  let filterObject =
    {
      "Sorting": [`${sorting}`],
      "Filters": [`${filter}`],
      "Services": [`${service}`],
      "ExtraFilter": []
    }

  filterObject = JSON.stringify(filterObject);

  let uri = `${baseUrl}?filters=${filterObject}`;

  return fetch(uri, {
    method: "GET"
  }).then(res => res.json());
}

//************************************************************

function* getVendorList(action) {
  const { sorting, filter, service } = action;

  try {
    const res = yield call(fetchVendorList, sorting, filter, service);
    yield put({ type: GET_VENDOR_LIST_COMPLETE, vendors: res.data.finalResult });
  } catch (err) {
    yield put({ type: GET_VENDOR_LIST_ERROR, err });
  }
}

/**********************************************************************/

export const vendorSaga = [
  takeEvery(GET_VENDOR_LIST, getVendorList),
];
