import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Text, Image, ScrollView, Pressable } from "react-native";

import * as Crypto from "expo-crypto";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { EstiloTurista } from "../styles/Estilo"

import Categorias from "../template/Categorias";
import Locais from "../template/Locais";
import Itu from "../template/Itu";


const Turista = function() {


   const [ categoriaSelecionada, definirCategoriaSelecionada ] = useState(Categorias[0].nome);

   
    return (
        <SafeAreaView style={ EstiloTurista.Tela }>

            <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>

            <ScrollView horizontal showsHorizontalScrollIndicator={ false } showsVerticalScrollIndicator={ false } style={ EstiloTurista.Barra }>

                {

                    Categorias.map(function(categoria) {

                        const key = Crypto.getRandomBytes(8);

                        return (
                            <Pressable key={ key } onPress={ () => definirCategoriaSelecionada(categoria.nome) }>

                                <View style={ EstiloTurista.BarraSelecao }>

                                    <View style={ (categoria.nome === categoriaSelecionada) ? EstiloTurista.BarraSelecaoCirculoSelecionado : EstiloTurista.BarraSelecaoCirculo }>

                                        <Image style={ EstiloTurista.BarraSelecaoImagem } source={ categoria.icone }/>

                                    </View>

                                    <Text style={ EstiloTurista.BarraSelecaoTexto }> { categoria.nome } </Text>

                                </View>

                            </Pressable>
                        );

                    })

                }

            </ScrollView>

            <ScrollView style={ EstiloTurista.Principal } showsVerticalScrollIndicator={ false }>

                { (categoriaSelecionada === "Mapa") ?

                    <MapView style={ EstiloTurista.Mapa } initialRegion={ Itu } provider={ PROVIDER_GOOGLE } liteMode>

                        {

                            Object.keys(Locais).map(function(key) {

                                if (Locais[key].length > 0) {

                                    return Locais[key].map(function(local, index) {

                                        const coordinate = {
                                            
                                            latitude: local.coordenada[0],

                                            longitude: local.coordenada[1],

                                        };

                                        return <Marker key={ index } coordinate={ coordinate } title={ local.titulo } description={ local.endereco }/>
    
                                    })

                                }
                                    
                            })

                        }

                    </MapView>

                :

                    Locais[categoriaSelecionada].map(function(local) {

                        const key = Crypto.getRandomBytes(8);

                        return (
                            <View key={ key } style={ EstiloTurista.Postagem }>

                                <Image style={ EstiloTurista.PostagemImagem } source={ local.imagem }/>

                                <Text style={ EstiloTurista.PostagemTitulo }>{ local.titulo }</Text>

                                <Text style={ EstiloTurista.PostagemTexto }> 📌  { local.endereco } </Text>

                                <Text style={ EstiloTurista.PostagemTexto }> ⭐  { local.estrela } </Text>

                                <Text style={ EstiloTurista.PostagemTexto }> 🌴  { categoriaSelecionada } </Text>

                            </View>
                        );

                    })

                }

            </ScrollView>

        </SafeAreaView>
    );

};


export default Turista; 