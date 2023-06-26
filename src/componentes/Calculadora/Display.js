import React from "react";
import { StyleSheet, Text, View} from "react-native";

const estilo = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#7a7c7d',
        alignItems: 'flex-end',
    },
    displayValue:{
        fontSize:60,
        color:'#000',
    }
})

export default props => {
    return(
     
        <View style={estilo.display}>
            <Text style={estilo.displayValue}
            numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}