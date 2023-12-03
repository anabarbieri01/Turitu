import React from "react";
import { SafeAreaView, StatusBar, View, Text, TextInput, Pressable, Image } from "react-native";


import { EstiloOperador } from "../styles/Estilo";


const OperadorAdicionarPonto = function({ navigation }) {


    return (
        <SafeAreaView style={ EstiloOperador.Tela }>

            <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>

            <View style={ EstiloOperador.TelaInterna }>

                <Text style={ EstiloOperador.AcessoFormularioTitulo }> 
                
                    Adicionar{ "\n" }

                    Pontos Turisticos
                    
                </Text>
                
                <View>
                
                    <Text style={ EstiloOperador.AcessoSubtitulo }> Imagem </Text>

                    <TextInput 
                        style={ EstiloOperador.AcessoEntrada } 
                        placeholder="https://" 
                        placeholderTextColor="#274057"
                        keyboardType="default"/>

                </View>
                
                <View>
                
                    <Text style={ EstiloOperador.AcessoSubtitulo }> Nome do ponto </Text>

                    <TextInput 
                        style={ EstiloOperador.AcessoEntrada } 
                        placeholder="Ex.: Parque Ecológico" 
                        placeholderTextColor="#274057"
                        keyboardType="default"/>

                </View>

                <View>
                
                    <Text style={ EstiloOperador.AcessoSubtitulo }> Estrela </Text>

                    <TextInput 
                        style={ EstiloOperador.AcessoEntrada } 
                        placeholder="Ex.: 5.0" 
                        placeholderTextColor="#274057"
                        keyboardType="number-pad"/>

                </View>

                <View>
                
                    <Text style={ EstiloOperador.AcessoSubtitulo }> Coordenada </Text>

                    <View style={{ flexDirection: "row", gap: 16, width: 280 }}>

                        <TextInput 
                            style={ EstiloOperador.AcessoEntradaCoord } 
                            placeholder="latitude" 
                            placeholderTextColor="#274057"
                            keyboardType="default"/>

                        <TextInput 
                            style={ EstiloOperador.AcessoEntradaCoord } 
                            placeholder="longitude" 
                            placeholderTextColor="#274057"
                            keyboardType="default"/>

                    </View>

                </View>

                <Pressable onPress={ () => navigation.navigate("Inicio") }>

                    <View style={ EstiloOperador.AcessoBotao }>

                        <Text style={ EstiloOperador.AcessoBotaoTexto }> Adicionar </Text>

                    </View>

                </Pressable>

            </View>

        </SafeAreaView>
    );

};


export default OperadorAdicionarPonto;