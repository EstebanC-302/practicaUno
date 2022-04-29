import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }

  aumentarContador = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  diminuirContador = () => {
    this.setState({
      contador: this.state.contador - 1
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Contador {this.state.contador}</h1>
        <button onClick={this.aumentarContador}>+ Sumar</button>
        <button onClick={this.diminuirContador}>- Restar</button>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



