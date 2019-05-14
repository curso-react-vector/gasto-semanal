import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Restante extends Component {
    render() {
        return (
            <div className={this.props.clase}>
                Restante: $ {this.props.restante}
            </div>
        );
    }
}

Restante.propTypes = {
    clase: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired,
}

export default Restante;