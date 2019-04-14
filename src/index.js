import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./route";
import registerServiceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./Redux";
import { Provider } from "react-redux";
import rootSaga from "./Saga";
import { Router } from "react-router-dom";
import history from "./history";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga, store.dispatch);

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
