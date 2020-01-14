import { all } from "redux-saga/effects";
import { vendorSaga } from "./vendorSaga";
import { filterSaga } from "./filterSaga";

function* root() {
  yield all([...vendorSaga, ...filterSaga]);
}

export default root;
