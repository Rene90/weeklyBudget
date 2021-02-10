import React, { useState} from 'react'
import Error from './Error'
import {v4 as uuid} from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({guardarGasto, guardarCrearGasto}) =>{
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  const agregarGasto= e =>{
    e.preventDefault();

    if(cantidad <1 || isNaN((cantidad)|| nombre.trim()==='')){
      guardarError(true)
      return
    }
    guardarError(false);
    const gasto ={
      nombre,
      cantidad,
      id: uuid()
    }
    guardarGasto(gasto);
    guardarCrearGasto(true);
    guardarNombre('')
    guardarCantidad(0)

  }




  return (

    <form
      onSubmit={agregarGasto}
    >
      <h2>Place your expenses here</h2>
      { error ? <Error mensaje="Both fields must be completed or Incorrect Budget"
      />: null}
      <div className="campo">
      <label>Expense</label>
      <input
        type="text"
        className="u-full-width"
        placeholder="Example: Food"
        value={nombre}
        onChange={e => guardarNombre(e.target.value)}
      />
      </div>

      <div className="campo">
      <label>Price</label>
      <input
        type="number"
        className="u-full-width"
        placeholder="Example: 300"
        value={cantidad}
        onChange={e => guardarCantidad(parseInt(e.target.value,10))}
      />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>

  )

}

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario
