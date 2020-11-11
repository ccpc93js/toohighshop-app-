import { FETCH_PRODUCTS } from "../types";

export const fetchProductos = () => async(dispatch) => {
    const res = await fetch("/apiProductos");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    })
}