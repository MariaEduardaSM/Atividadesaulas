import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Botao from './Botao';
import Display from './Display';

export default class Calculadora extends Component {

    state = {
        displayValue: '0'
    }

    clearDisplay = () => {
        this.setState({ displayValue: '0' })
    }
    setDigit = digito => {
        this.setState({ displayValue: digito })
    }
    setOperacao = operacao => {

    }
    
    render() {
        return (
            <View style={estilos.calculadora}>
                <Display value={this.state.displayValue} />
                <View style={estilos.botoes}>
                    <Botao label='AC' triple onClick={() => this.clearDisplay()} />
                    <Botao label='/' op onClick={this.setOperacao} />
                    <Botao label='7' onClick={this.setDigit} />
                    <Botao label='8' onClick={this.setDigit} />
                    <Botao label='9' onClick={this.setDigit} />
                    <Botao label='*' op onClick={this.setOperacao} />
                    <Botao label='4' onClick={this.setDigit} />
                    <Botao label='5' onClick={this.setDigit} />
                    <Botao label='6' onClick={this.setDigit} />
                    <Botao label='-' op onClick={this.setOperacao} />
                    <Botao label='1' onClick={this.setDigit} />
                    <Botao label='2' onClick={this.setDigit} />
                    <Botao label='3' onClick={this.setDigit} />
                    <Botao label='+' op onClick={this.setOperacao} />
                    <Botao label='0' double onClick={this.setDigit} />
                    <Botao label='.' onClick={this.setDigit} />
                    <Botao label='=' op onClick={this.setOperacao} />
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    calculadora: {
        flex: 1,
    },
    botoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});