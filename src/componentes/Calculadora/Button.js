import React from "react";
import { StyleSheet, Text, Dimensions,
     TouchableHighlight } from "react-native";

const estilo = StyleSheet.create({
    button:{
        fontSize: 41,
        height:Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000'
    },
    buttonOp:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble:{
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3,
    },
})

export default props => {
    const styleButton = [estilo.button]
    if (props.double) styleButton.push(estilo.buttonDouble)
    if (props.triple) styleButton.push(estilo.buttonTriple)
    if (props.op) styleButton.push(estilo.buttonOp)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}