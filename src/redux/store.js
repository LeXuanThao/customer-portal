import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas";
import rootReducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
export default store;