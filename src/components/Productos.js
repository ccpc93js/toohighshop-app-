import React, { Component } from 'react'
import formatCurrency from "../util";

export default class Productos extends Component {
    render() {
        return (
            <div>
                <ul className="productos">
                    {this.props.productos.map(producto =>(
                        <li key={producto._id}>
                            <div className="producto">
                                <a href={"#" + producto._id}>
                                    <img src={producto.imagen} alt={producto.titulo}></img>
                                    <div className="producto-precio">
                                    <button
                                    onClick={()=> this.props.agregarACarrito(producto)} 
                                    className="button primary">Agregar a carrito</button>
                                    </div>
                                    <div className="precio-titulo">
                                    {formatCurrency(producto.precio)} 
                                    <p>{producto.titulo}</p>
                                    </div>
                                    
                                </a>
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
