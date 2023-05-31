import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const estilo = StyleSheet.create({
    buttonOp:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#3a127a',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#8a44fc'
    },
    OperationButton:{
        color:'#fff',
        backgroundColor: '#fa8321'
    },
    buttonDouble:{
        widt: (Dimensions.get('window').widt/4)*2, 
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4)*3,
    }
})

export default props => {
    const styleButton = [estilo.button]
    if (props.double) styleButton.push(estilo.buttonDouble)
    if (props.triple) styleButton,push(estilo.buttonTriple)
    if(props.op)styleButton.push(estilo.buttonOp)
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}