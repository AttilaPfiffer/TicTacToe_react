import React from 'react'
import Cella from './Cella'

function Jatekter(props) {
    

  return (
    <>
        {
            props.lista.map((elem, index) => {
                    return(<Cella jel = {elem} key = {index} index = {index} />)
            }
            )
        }

    </>
  )
}

export default Jatekter