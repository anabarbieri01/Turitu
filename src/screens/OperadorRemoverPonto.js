import React from "react";
import { SafeAreaView, StatusBar, View, Text, Pressable, Image, ScrollView } from "react-native";

import * as Crypto from "expo-crypto";
import { EstiloOperador } from "../styles/Estilo";

import Locais from "../template/Locais";

const OperadorRemoverPonto = function({ navigation }) {


    return (
        <SafeAreaView style={ EstiloOperador.Tela }>

            <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>

            <View style={ EstiloOperador.TelaInterna }>

                <Text style={ EstiloOperador.AcessoFormularioTitulo }> 
                
                    Remover { "\n" }

                    Pontos Turisticos
                    
                </Text>
                
                <ScrollView>

                    {

                        Object.keys(Locais).map(function(index) {

                            return Locais[index].map(function(local) {

                                const key = Crypto.getRandomBytes(8);

                                return (
                                    <View key={ key } style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 8 }}>

                                        <Text> { local.titulo.length > 32 ? local.titulo.slice(0, 32) + "..." : local.titulo } </Text>

                                        <Pressable onPress={ () => navigation.navigate("Inicio") }>

                                            <View style={ EstiloOperador.AcessoBotao }>

                                                <Text style={ EstiloOperador.AcessoBotaoTexto }> Remover </Text>

                                            </View>

                                        </Pressable>

                                    </View>
                                );

                            })
                                
                        })

                    }

                </ScrollView>

            </View>

        </SafeAreaView>
    );

};


export default OperadorRemoverPonto;