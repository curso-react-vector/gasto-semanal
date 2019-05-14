import React from "react";
import "./../css/App.css";
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from "./helper";
import ControlPresupuesto from './ControlPresupuesto';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      presupuesto: '',
      restante: '',
      gastos: {},
    }
  }

  // Agregar un nuevo gasto al state

  agregarGasto = gasto => {
    // Tomar una copia del state actual
    const gastos = { ...this.state.gastos };
    // Agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    // Ponerlo en state
    this.setState({
      gastos: gastos,
    })

    // Restar presupuesto

    this.restarPresupuesto(gasto.cantidadGasto);
  }

  //  Funcion para restar del presupuesto cuando un gasto se crea

  restarPresupuesto = (cantidad) => {
    let restar = Number(cantidad);

    let restante = this.state.restante;

    restante -= restar;

    this.setState({
      restante: restante,
    })
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Introduce tu presupuesto');

    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto,
      })
    } else {
      this.obtenerPresupuesto();
    }
  }

  render() {
    return (
      <div className="App container">
        <Header titulo="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column"><Formulario agregarGasto={this.agregarGasto} /></div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
              <ControlPresupuesto presupuesto={this.state.presupuesto} restante={this.state.restante} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
