import React from "react";
import { View, StatusBar, Text, Image, Pressable, ImageBackground } from "react-native";

import { EstiloInicio } from "../styles/Estilo"


const Inicio = function({ navigation }) {

    
    return (
        <View>

            <StatusBar barStyle="light-content" backgroundColor="#FFF"/>

            <ImageBackground style={ EstiloInicio.ImagemFundo } source={ require("../../assets/screen.jpg") }>

                <View style={ EstiloInicio.FundoEspacamento }>

                    <View style={{ height: 280 }}></View>

                    <Image style={ EstiloInicio.FundoEspacamentoImagem } source={ require("../../assets/logo-text.png") }/>

                    <Text style={ EstiloInicio.FundoEspacamentoLegenda }> 

                        Bem vindo ao guia turistico { "\n" } 

                        digital mais completo { "\n" } 

                        sobre de Itu! 
                        
                    </Text>

                    <Pressable onPress={ () => navigation.navigate("Turista") }>

                        <View style={ EstiloInicio.BotaoTurista }>

                            <Text style={ EstiloInicio.BotaoTuristaTexto }> Entrar como turista </Text>

                        </View>

                    </Pressable>

                    <Pressable onPress={ () => navigation.navigate("Operador") }>

                        <View style={ EstiloInicio.BotaoOperador }>

                            <Text style={ EstiloInicio.BotaoOperadorTexto }> Operador </Text>

                        </View>

                    </Pressable>

                </View>

            </ImageBackground>

        </View>
    );

};


export default Inicio;