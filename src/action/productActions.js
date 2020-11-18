import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TALLA, ORDER_PRODUCTS_BY_PRECIO} from "../types";

export const fetchProductos = () => async(dispatch) => {
    const res = await fetch("/apiProductos");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    })
}

export const filtradorProductos = (productos, talla) => async(dispatch) => {
   
    dispatch({
        type: FILTER_PRODUCTS_BY_TALLA,
        payload: {
            talla: talla,
            items:
             talla === ""
             ? productos
             : productos.filter(x=> x.tallasDisponibles.indexOf(talla)>=0)
        }
    })
}

export const clasificacionProductos = (filteredProductos, clasificacion) => async(dispatch) => {
   
    const productosClasificados = filteredProductos.slice();
    if(clasificacion === "ultimo"){
        productosClasificados.sort((a,b)=>(a._id > b._id ? 1 : -1));
    }else{
        productosClasificados.sort((a,b)=>
        clasificacion === "menor"
            ? a.precio > b.precio
                ? 1
                : -1
            :a.precio > b.precio
            ? -1
            : 1
        );
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRECIO,
        payload: {
            clasificacion: clasificacion,
            items: productosClasificados
        }
    })
}