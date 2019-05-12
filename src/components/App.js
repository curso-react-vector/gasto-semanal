import React from "react";
import "./../css/App.css";
import Header from './Header';
import Formulario from './Formulario';

class App extends React.Component {

  // Agregar un nuevo gasto al state


  render() {
    return (
      <div className="App container">
        <Header titulo="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column"><Formulario agregarGasto={this.agregarGasto} /></div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
