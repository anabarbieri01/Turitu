import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./src/screens/Inicio"
import Operador from "./src/screens/Operador"
import OperadorAdicionarPonto from "./src/screens/OperadorAdicionarPonto"
import OperadorRemoverPonto from "./src/screens/OperadorRemoverPonto"
import Turista from "./src/screens/Turista"


const Stack = createNativeStackNavigator();


const App = function() {


    const [ fonteCarregada ] = useFonts({

        "OpenSans": require("./src/fonts/OpenSans-Regular.ttf"),

    });


  return (
        <NavigationContainer>

            { (fonteCarregada) &&

                <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>

                    <Stack.Screen name="Inicio" component={ Inicio }/>

                    <Stack.Screen name="Operador" component={ Operador }/>

                    <Stack.Screen name="OperadorAdicionarPonto" component={ OperadorAdicionarPonto }/>

                    <Stack.Screen name="OperadorRemoverPonto" component={ OperadorRemoverPonto }/>

                    <Stack.Screen name="Turista" component={ Turista }/>

                </Stack.Navigator>

            }

        </NavigationContainer>
    );

};

export default App;