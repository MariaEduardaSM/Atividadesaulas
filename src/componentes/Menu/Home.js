import React from "react";
import {View,Button}from "react-native";
import Padrao from "../../estilo/Padrao";

const Home = ({navigation}) => { 
    return (
        <View style={Padrao.center}>
        <Button
           title="ir para a tela about"
           onPress={() => navigation.navigate("About")}
         />

    

        </View>
    );
};

export default Home






