import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../rootReducers/";

const initialState = {};
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(compose(applyMiddleware(...middleware)))
);

export default store;
