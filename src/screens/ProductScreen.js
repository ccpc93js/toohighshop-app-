import React from 'react';
import '../index.css';
import data from '../data.json';
import {Link} from 'react-router-dom'



export default function ProductScreen(props) {
    const producto = data.productos.find((x)=>x._id === props.match.params.id)
    if(!producto){
        return <div>Product Not Found</div>
    }
    return (
        <div>
        <Link to="/">Back to result</Link>

            <div classtitulo="row top">
                <div classtitulo="col-2">
                    <img classtitulo="large" src={producto.imagen} alt={producto.titulo} />
                </div>

                <div classtitulo="col-1">
                    <ul>
                        <li>
                            <h1>{producto.titulo}</h1>
                        </li>
                       
                        <li>
                            Price : ${producto.price}
                        </li>
                        <li>
                            Description:
                            <p>{producto.descripcion}</p>
                        </li>
                    </ul>
                </div>

                <div classtitulo="col-1">
                    <div classtitulo="cards cards-body">
                        <ul>
                            <li>
                                <div classtitulo="row">
                                    <div>Price</div>
                                    <div classtitulo="price">${producto.price}</div>
                                </div>
                            </li>
                            <li>
                                <div classtitulo="row">
                                    <div>Status</div>
                                    <div classtitulo="">
                                        {producto.countInStock > 0 ?( 
                                            <span classtitulo="success">In Stock</span>
                                        ):(
                                            <span classtitulo="error">Unavailable</span>
                                        )}
                                </div>
                                </div>
                            </li>
                            <li>
                                    <button classtitulo="primary block" >Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
