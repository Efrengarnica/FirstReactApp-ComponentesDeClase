import Testimonio from './componentes/Testimonio.js'
import testimonios from './datos/testimonios.js';
import './App.css';
import React from 'react';

//Un componente duncional puede estar trabajando con un componente de clase, no hay tema

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen los programadores</h1>
          {testimonios.map((testimonio, index) => (
            <Testimonio
              key={index}
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
            />
          ))}
        </div>
      </div>
    );//return
  }//render para retornar la estructura jsx
}//class App
/* function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los programadores</h1>
        {testimonios.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}//App */

export default App;
