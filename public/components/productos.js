import React, { Component } from 'react'

export default class productos extends Component {
    render() {
        return (
            <div>
                <ul className="productos">
                    {this.props.productos.map(producto =>(
                        <li key={producto._id}>
                            <div className="producto">
                                <a href={"#" + producto._id}>
                                    <img src={producto.imagen} alt={producto.titulo}></img>
                                    <p>
                                        {producto.titulo}
                                    </p>
                                </a>
                                <div className="producto-precio">
                                    <div>
                                        {producto.precio}
                                    </div>
                                    <button className="button primary">agregar a carrito</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
