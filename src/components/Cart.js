import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
    render() {
        const {cartItems}=this.props;
        return (
            <div>
                {cartItems.length === 0?(<div className="cart cart-header">Carrito vacio</div>
                ):(
                <div className="cart cart-header">Tienes {cartItems.length} en el carrito{""}
                </div>
                )}
                <div>
                 <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item =>(
                            <li key={item._id}>
                                <div>
                                    <img src={item.imagen} alt={cartItems.titulo}></img>
                                </div>
                                <div>
                                    <div>{item.titulo}</div>
                                    <div className="right">
                                        {formatCurrency(item.precio)} x {item.count}{""}
                                        <button 
                                         className="button"
                                         onClick={()=>this.props.removerDeCarrito(item)}>Remover</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                 </div> 
                 {cartItems.length !== 0 &&(
                    <div className="cart">
                    <div className="total">
                        Total:{""}
                        {formatCurrency(
                            cartItems.reduce((a,c) => a + c.precio * c.count, 0)
                        )}
                    </div>
                    <button className="button primary">Continuar</button>
                 </div>
                 )}    
            </div>
            </div>
            
        )
    }
}
