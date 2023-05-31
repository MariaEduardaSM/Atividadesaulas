import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Padrao  from '../../estilo/Padrao';
import MegaNumeros from './MegaNumeros';

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
     }

     constructor(props){
        super(props)

        this.alteraQtde = this.alteraQtde.bind(this)
     }

     alteraQtde = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
     }

     gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60)+1
        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
     }

     gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(n => [...n, this.gerarNumerosNaoContido(n)], [])
        .sort((a,b) => a - b)
        this.setState({numeros})
     }

     exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(n => {
            return <MegaNumeros num={n} />
        })
     }
    
    render(){
        return (
            <>
                <Text style={Padrao.txtG}>
                    Gerador de Mega Sena 
                </Text>
                <TextInput
                placeholder='Qtde de números'
                value={`${this.state.qtdeNumeros}`}
                onChangeText={this.alteraQtde}
                keyboardType='number-pad'
                style={{borderBottomWidth: 1}}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View 
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                  {this.exibirNumeros()}
                </View>
                
            </>
        )
    }   
}