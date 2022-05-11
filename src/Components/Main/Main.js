import React, { useEffect, useState } from 'react'
import { cambiarColor } from '../../shared/cambiarColor';
import { Cartel } from '../Cartel/Cartel';
import { Contador } from '../Contador/Contador';
import ContadorClase from '../ContadorClase/ContadorClase';
import ContadorFuncion from '../ContadorFuncion/ContadorFuncion';
import './Main.css'

const Main = () => {
    
    const [contador, setContador] = useState(0)
    const [titulo, setTitulo] = useState("Hola Mundo")
    const [color, setColor] = useState('white')

    useEffect(() => {
        // Ejecutar este codigo cuando el estado monitoreado cambie.
        cambiarColor(contador, setColor)
        // Monitorear el contador.
    }, [contador])
    
    return (
        <div className='container'>
            <Cartel titulo={titulo} contador={contador} color={color}/>
            <Contador titulo={titulo} contador={contador} setContador={setContador} color={color} />
            <hr /><hr />
            <ContadorClase />
            <hr /><hr />
            <ContadorFuncion />
        </div>
    )
}

export default Main;
