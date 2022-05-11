import React from 'react'
import './Cartel.css'

export const Cartel = ({titulo, contador, color}) => {

  return (
      <div className='cartel' style={ { backgroundColor: `${color}`} }>
        <span>{titulo}: {contador}</span>
      </div>
  )
}
