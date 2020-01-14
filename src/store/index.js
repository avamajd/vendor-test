import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "../sagas";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);
