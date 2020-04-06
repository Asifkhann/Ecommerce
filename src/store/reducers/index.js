import { combineReducers } from "redux";
import productListReducer from "./reducers";
import productReducersUi from "./reducersUi";

const entitiesReducers = combineReducers({
  productListReducer
});

const uiReducers = combineReducers({
  productReducersUi
});

export default combineReducers({
  entities: entitiesReducers,
  ui: uiReducers
});
