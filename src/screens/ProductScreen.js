import React, { useState } from 'react';
import '../index.css';
import data from '../data.json';
import {Link} from 'react-router-dom'
import './productScreen.css'
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productId = props.match.params.id;

    const producto = data.productos.find((x)=>x._id === props.match.params.id)
    if(!producto){
        return <div>Product Not Found</div>
    }
    const addToCartHandler =() =>{
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (
        <div className="CP">
        <Link className="volver" to="/coleccion">
            <IconButton>
                <ArrowBackIosIcon/>
            </IconButton>
        </Link>

        
        <div className="general-product">
        

            <div className="fila">
                <div className="columna-img">
                    <img className="" src={producto.imagen} alt={producto.titulo} />
                </div>

                <div className="contenido-op">

                        <div className="descripcion-1">
                            <ul>
                                <li>
                                    <h1>{producto.titulo}</h1>
                                </li>
                            
    
                                <li>
                                    <p>{producto.descripcion}</p>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <div className="compra-1">
                                <ul>
                                    <div className="precio ">

                                            <li>
                                                <div className="">
                                                    <div className="price">${producto.precio}</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="">
                                                    <p>Estado</p>
                                                    <div className="">
                                                        {producto.countInStock > 0 ?( 
                                                            <span className="success">En Stock</span>
                                                        ):(
                                                            <span className="error">Agotado</span>
                                                        )}
                                                </div>
                                                </div>
                                            </li>
                                    </div>
                                    {
                                        producto.countInStock > 0 && (
                                            <div className="enstock">
                                            <li>
                                                <div className="cantidades">
                                                    <p>Cantidad</p>
                                                    <div>
                                                        <select value={qty} onChange={e => setQty(e.target.value)}>
                                                            {
                                                                [...Array(producto.countInStock).keys()].map(
                                                                    (x) =>(
                                                                    <option key={x+1} value={x + 1}>{x+1}</option>
                                                                )
                                                            )
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                          
                      
                                            </div>

                                        )
                                    }
                                    <div>
                                        
                                            <button 
                                            className="button-product block " 
                                            onClick={addToCartHandler}

                                            >
                                            Agregar a carrito
                                            </button>
                                        
                                    </div>
                                </ul>
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
