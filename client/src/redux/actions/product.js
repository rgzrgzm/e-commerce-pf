import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsBegin());
    try {
      const response = await fetch("http://localhost:3001/products");
      const res = await handleErrors(response);
      const json = await res.json();
      dispatch(fetchProductsSuccess(json));
      return Promise.resolve();
    } catch (error) {
      return dispatch(fetchProductsFailure(error));
    }
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchProductsBegin = () => ({
  type: GET_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAIL,
  payload: { error },
});
