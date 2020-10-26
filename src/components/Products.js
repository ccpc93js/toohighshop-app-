import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product =>(
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.imagen} alt={product.titulo}></img>
                                    <p>
                                        {product.titulo}
                                    </p>
                                </a>
                                <div className="product-precio">
                                    <div>
                                        {product.precio}
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
