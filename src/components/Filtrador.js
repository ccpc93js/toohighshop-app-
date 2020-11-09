

import React, { Component } from 'react'

export default class Filtrador extends Component {
    render() {
        return (
            <div className="filtrador">
                <div className="filtrador-resultado">{this.props.count} Productos</div>
                <div className="filtrador-clasificacion">
                    Ordenar por precio{"    "}
                    <i className="fas fa-chevron-circle-down"></i>
                    <select className="select" value={this.props.talla} onChange={this.props.clasificacionProductos}>
                        <option>Ultimo</option>
                        <option value="menor">Menor</option>
                        <option value="mayor">Mayor</option>
                    </select>
                </div>
                <div className="filtrador-talla">
                    Filtro{"    "}
                    <select className="select" value={this.props.talla} onChange={this.props.filtradorProductos}>
                        <option value="">Todas</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}

<script src="https://kit.fontawesome.com/a50fe4cfe6.js" crossorigin="anonymous"></script>