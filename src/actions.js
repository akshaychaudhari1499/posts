export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } else {
        throw new Error(`HTTP error ${response.status}`);
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
