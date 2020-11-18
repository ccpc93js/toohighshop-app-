const { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TALLA, ORDER_PRODUCTS_BY_PRECIO } = require("../types");

export const productsReducer = (state ={}, action) =>{
    switch (action.type){
        case FILTER_PRODUCTS_BY_TALLA:
            return {
                ...state,
                talla: action.payload.talla,
                filteredItems: action.payload.items,
            };
        case ORDER_PRODUCTS_BY_PRECIO:
            return {
                ...state,
                clasificacion: action.payload.clasificacion,
                filteredItems: action.payload.items,
            };
        case FETCH_PRODUCTS:
            return {items: action.payload,filteredItems: action.payload  };
            default:
                return state;
    }
}