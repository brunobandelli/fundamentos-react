import "./Input.css";
import React, { useState } from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    // eslint-disable-next-line no-unused-vars
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

            </div>
            <input value={valor} onChange={quandoMudar}/>
            <input value={valor} readOnly />
            <input value={undefined}  />
        </div>
    )
}