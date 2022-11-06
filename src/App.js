import './App.css';
import Tecla from './components/Tecla';
import Pantalla from './components/Pantalla';
import { useState } from 'react';

function App() {
  /* constantes matematicas */
  const e = Math.E;
  const π = Math.PI;

  /* valores de las teclas */
  const valores = ['(', ')', 'x!', 'x²', '√', 'ⁿ√', 'sin', 'cos', 'tg', 'x³', '∛', 'xⁿ', '1', '2', '3', '/', '%', 'ln', '4', '5', '6', '*', 'log', 'e', '7', '8', '9', '-', 'AC', '=', '.', '0', 'π', '+', 'MR'];

  const [ant, setAnt] = useState('');
  const [pos, setPos] = useState('');

  /* funciones en español */
  function factorial(n) {
    if (n > 1) {
      return n * factorial(n - 1);
    }
    return 1;
  }

  function seno(n) {
    return Math.sin(n);
  }

  function coseno(n) {
    return Math.cos(n);
  }

  function tangente(n) {
    return Math.tan(n);
  }

  function potencia(b, e) {
    return Math.pow(b, e);
  }

  function raiz(n) {
    return Math.sqrt(n);
  }

  function raiz_n(x, n) {
    return Math.pow(x, 1 / n);
  }

  function ln(n) {
    return Math.log(n);
  }

  function log(n) {
    return Math.log10(n);
  }

  function raizCubica(n) {
    return Math.pow(n, 1 / 3);
  }

  const funcion = (valor) => {
    let calculo = '';
    switch (valor) {
      case 'AC':
        setAnt('');
        setPos('');
        break;
      case 'MR':
        setAnt('ERROR');
        setPos('');
        break;
      case 'x²':
        setAnt(ant + 'potencia(');
        setPos(',2)' + pos);
        break;
      case 'x³':
        setAnt(ant + 'potencia(');
        setPos(',3)' + pos);
        break;
      case 'xⁿ':
        setAnt('potencia(' + ant + ',');
        setPos(')' + pos);
        break;
      case '√':
        setAnt(ant + 'raiz(');
        setPos(')' + pos);
        break;
      case '∛':
        setAnt(ant + 'raizCubica(');
        setPos(')' + pos);
        break;
      case 'ⁿ√':
        setAnt('raiz_n(' + ant + ',');
        setPos(')' + pos);
        break;
      case 'sin':
        setAnt(ant + 'seno(');
        setPos(')' + pos);
        break;
      case 'cos':
        setAnt(ant + 'coseno(');
        setPos(')' + pos);
        break;
      case 'tg':
        setAnt(ant + 'tangente(');
        setPos(')' + pos);
        break;
      case 'ln':
        setAnt(ant + 'ln(');
        setPos(')' + pos);
        break;
      case 'log':
        setAnt(ant + 'log(');
        setPos(')' + pos);
        break;
      case 'x!':
        setAnt(ant + 'factorial(');
        setPos(')' + pos);
        break;
      case '=':
        try {
          calculo = eval(ant + pos);
        } catch (error) {
          calculo = "ERROR";
        }
        setAnt(calculo);
        setPos('');
        break;
      default:
        setAnt(ant + valor);
    }
  };

  return (
    <div className="card calculadora bg-dark rounded-2 border border-dark border-2">
      <div className="card-header bg-secondary rounded-top p-3 m-0">
        <Pantalla resultado={ant + pos} />
      </div>
      <div className="card-body rounded-bottom p-3 bgTeclado">
        <div className='row'>
          {valores.map(k => <Tecla valor={k}
            estilo={(k === '=') ? 'btn btnIgual' : 'btn btnCalc'}
            funcion={funcion} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
