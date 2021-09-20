/* eslint-disable no-unused-vars */
import "./Contador.css";
import React, { Component } from "react";

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        });
    };

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
            </div>
            


        )
    }
}