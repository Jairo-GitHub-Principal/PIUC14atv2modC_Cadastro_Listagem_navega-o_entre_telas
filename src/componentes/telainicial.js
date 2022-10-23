import * as React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //stack navigation


import CadastarListarCliente from "./cadastroEListagem";
import ListagemCliente from "./listagemCliente";

import { homeStyle } from "../estilos/estilos";



function TelaInicial({ navigation }) {
  const logo = require('../img/LogoSantosImobiliaria.png')
 

  return (
      <ScrollView style={{ backgroundColor: '#738c7b' }} >
          <View style={{ flexDirection: 'row', backgroundColor: '#869D92', width: '100%', alignItems: 'center', paddingTop: 10, justifyContent: 'space-between', }}>
              <Text style={{ color: 'white', marginLeft: 30, fontSize: 20 }}>SantosImobiliária</Text>
              <Image source={logo} style={{ marginRight: 30, width: 100, height: 55 }}></Image>
          </View>

          <View style={homeStyle.containerBotao}>
              <TouchableOpacity onPress={() => navigation.navigate("cadastro")}
                  style={homeStyle.botaoCadClie}  >
                  <Text style={homeStyle.testoBotao}>Cadastrar Clientes</Text>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("listagem")}
                  style={homeStyle.botaoListClie}>
                  <Text style={homeStyle.testoBotao}>Clientes Cadastrados</Text>
              </TouchableOpacity>
          </View>

          <View>
              
            
             
          
          </View>


      </ScrollView>
  );

}

const stack = createNativeStackNavigator();
export default function Home() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName={"Home"} >
                <stack.Screen name="Home" component={TelaInicial}  />
                <stack.Screen name="cadastro" component={CadastarListarCliente} />
                <stack.Screen name = "listagem" component = {ListagemCliente}/>
            </stack.Navigator>

        </NavigationContainer>
    )

}