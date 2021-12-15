import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ({ saludo, subtitulo }) => {
    const titulo = '';
    return (
        <>
            <h1>{ saludo }!!!</h1>
            <p>{ subtitulo }</p>
        </>
    );
        
} 

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;