import React from 'react';
import '../hojas-de-estilo/Testimonio.css'


class Testimonio extends React.Component{
  render(){  
    //Método obligatorio en los compoenentes de clase
    //Al parecer todo lo que hicimos abajo con el componente funcional return va a ir dentro de render
    return(
      <div className='contenedor-testimonio'>
          <img className='imagen-testimonio'
          //Aquí en antes de props usamos this
          src={require(`../imagenes/testimonio-${this.props.imagen}.jpg`)}
          alt={`Foto de ${this.props.nombre}`} />
          <div className='contenedor-texto-testimonio'>
              <p className='nombre-testimonio'><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
              <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
              <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: `"${this.props.testimonio}"` }}></p>
          </div>
      </div>
    );//return

  }//render



}// class Testimonio


//Lo cambiamos por un componente de clase
/* function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
        <img className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt={`Foto de ${props.nombre}`} />
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
            <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
            <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: `"${props.testimonio}"` }}></p>
        </div>
    </div>
  );
} */

//Al parecer es todo igual, solo cambia lo de arriba, también hay que exportar
export default Testimonio;  