import React from "react";
import './App.css'

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from './components/layout/Card'
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ => 

        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                        <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                        <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#982395">
                        <ParOuImpar numero={17}></ParOuImpar>
                        <UsuarioInfo usuario={{ nome: 'Blastoise' }}/> 
                        {/* <UsuarioInfo usuario={{}}/>
                        <UsuarioInfo usuario={{email: 'blas@toise.com '}}/>
                        <UsuarioInfo /> */}
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                        <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                        <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Bandelli">
                        <FamiliaMembro nome="Bruno"/>
                        <FamiliaMembro nome="Carlos"/>
                        <FamiliaMembro nome="Dora"/>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Bruno" 
                        nota={10}  
                    />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>

            </div>
        </div>



/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */