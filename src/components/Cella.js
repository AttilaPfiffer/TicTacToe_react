import React from 'react'
import "./Cella.css"

function Cella(props) {
    function katt() {
        // játéktér katt metódusát kell hivni, megkapja a propson keresztül
        props.katt(props.index)
    }
  return (
    <div className = "cella" onClick = {() => katt()}>{props.jel}</div>
  )
}

export default Cella