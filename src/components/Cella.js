import React, { useContext } from 'react'
import "./Cella.css"
import { KattContext } from '../context/KattContext'

function Cella(props) {
  const {katt} = useContext(KattContext)

    function kattintas() {
        // játéktér katt metódusát kell hivni, megkapja a propson keresztül
        katt(props.index)
    }
  return (
    <div className = "cella" onClick = {() => kattintas()}>{props.jel}</div>
  )
}

export default Cella