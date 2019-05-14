import React, { Component } from 'react';

class Gasto extends Component {
    render() {
        return (
            <li className="gastos">
                <p>
                    {this.props.gasto.nombreGasto}
                    <span className="gasto">$ {this.props.gasto.cantidadGasto}</span>
                </p>
            </li>
        );
    }
}

export default Gasto;