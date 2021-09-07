import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Bruno" nota={10}>   
        </ComParametro>
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Bandelli" nota={10}>   
        </ComParametro>
    </div>,
    document.getElementById('root')
)