import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Text, TextInput, Pressable, Image } from "react-native";


import { EstiloOperador } from "../styles/Estilo";


const Operador = function({ navigation }) {


    const [ acesso, definirAcesso ] = useState(true);

    const [ acessoDigito, mudarAcessoDigito ] = useState("");


    const TentarAcesso = function() {

        if (acessoDigito === "123456") {

            definirAcesso(false)

        }

    };

    return (
        <SafeAreaView style={ EstiloOperador.Tela }>

            <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>

            { (acesso) ?

                <View style={ EstiloOperador.TelaAcesso }>

                    <Text style={ EstiloOperador.AcessoTitulo }> Acesso do Operador </Text>

                    <TextInput 
                        style={ EstiloOperador.AcessoEntrada } 
                        placeholder="*****" 
                        placeholderTextColor="#274057"
                        secureTextEntry
                        onChangeText={ mudarAcessoDigito }
                        value={ acessoDigito }
                        keyboardType="numeric"
                    />

                    <Pressable onPress={ TentarAcesso }>

                        <View style={ EstiloOperador.AcessoBotao }>

                            <Text style={ EstiloOperador.AcessoBotaoTexto }> Entrar </Text>

                        </View>

                    </Pressable>

                </View>

            :

                <View style={ EstiloOperador.TelaAcesso }>

                    <Text style={ EstiloOperador.AcessoTitulo }> 
                        
                        Painel do { "\n" }

                        Operador 
                            
                    </Text>

                    <Pressable onPress={ () => navigation.navigate("OperadorAdicionarPonto") }>

                        <View style={ EstiloOperador.AcessoBotao }>

                            <Text style={ EstiloOperador.AcessoBotaoTexto }> Adicionar </Text>

                        </View>

                    </Pressable>

                    <Pressable onPress={ () => navigation.navigate("OperadorRemoverPonto") }>

                        <View style={ EstiloOperador.AcessoBotao }>

                            <Text style={ EstiloOperador.AcessoBotaoTexto }> Remover </Text>

                        </View>

                    </Pressable>

                </View> 

            }

        </SafeAreaView>
    );

};


export default Operador;