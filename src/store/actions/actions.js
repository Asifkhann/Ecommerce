import * as Constants from "../constants/constants";
import axios from "axios";

export const getProductList = () => {
  return async dispatch => {
    dispatch({
      type: Constants.GET_PRODUCT_LIST_REQUEST
    });

    try {
      const data = await axios.get(
        "https://my-json-server.typicode.com/benirvingplt/products/products"
      );
      dispatch({
        type: Constants.GET_PRODUCT_LIST_SUCCESS,
        payload: data.data
      });
    } catch (err) {
      dispatch({
        type: Constants.GET_PRODUCT_LIST_FAILURE,
        payload: err
      });
    }
  };
};

export const addQuantity = (id, price, index) => {
  return {
    type: Constants.ADD_PRODUCT,
    id,
    price,
    index
  };
};

export const subtractQuantity = (id, price, index) => {
  return {
    type: Constants.SUBTRACT_PRODUCT,
    id,
    price,
    index
  };
};

export const removeToCart = (id, price, index) => {
  return {
    type: Constants.REMOVE_PRODUCT,
    id,
    price,
    index
  };
};
