import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const getProducts = (search) => {
  return async (dispatch) => {
    dispatch(fetchProductsBegin());

    try {
      const url = new URL("http://localhost:3001/products");
      const params = new URLSearchParams(url.search);
      let response = await fetch(url);
      if (search) {
        const { name } = search;
        params.set("name", name);
        if (params) url.search = params;
      } else {
        response = await fetch(url);
      }

      const res = await handleErrors(response);
      console.log(res);
      const json = await res.json();
      return dispatch(fetchProductsSuccess(json));
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
