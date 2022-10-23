import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { homeStyle } from "../estilos/estilos";

import CadastarListarCliente from "./cadastroEListagem";
import Cliente from "../model/cliente";
import ItemDatabase from "../databases/ItemDatabase";






class ListagemCliente extends Component {

    constructor(props) {

        super(props)
        this.state = {
            listaDecliente: []
        }
        this.ListarCliente()
      
    }



    ListarCliente = () => {
        const DB = new ItemDatabase()
        DB.Listar().then(listaCompleta => { this.setState({ listaDecliente: listaCompleta }) })

    }

    remover = (id) => {

        const DB = new ItemDatabase();
        DB.Remover(id);
        this.ListarCliente()
    }

    update=()=>{

    }


    render() {
        
        

       
        return (




            <ScrollView style={{ backgroundColor: '#738c7b' }} >
                <View>
                   
                </View>
                { this.state.listaDecliente.map(elementoLista =>(
                    
                    <View style={estilos.containerLista}>

                    
                           
                        <View style={{ alignItems: 'flex-start', margin: 20 }}>

                            <Text style={estilos.testos} >Cliente:{this.props.nome=elementoLista.nome} </Text>
                            <Text style={estilos.testos} >CPF:{this.props.cpf = elementoLista.cpf}</Text>
                            <Text style={estilos.testos}>Data de nascimento: {this.props.dataNascimento = elementoLista.dataNascimento}</Text>
                            <Text style={estilos.testos}>Assino Contrato:{this.props.dataAssiContrato = elementoLista.dataAssiContrato}</Text>
                            <Text style={estilos.testos}>Vencimento do aluguel:{this.props.dataPagaLuguel = elementoLista.dataPagaLuguel}</Text>
                            



                        </View>


                        <View style={homeStyle.containButtLista}>
                            <TouchableOpacity
                                onPressIn={() => this.update()}
                                style={homeStyle.botaoAtualizarExcluir}  >
                                <Text style={{ fontSize: 18, fontWeight: '800', color: 'white', textAlign: 'center' }}>Atualizar</Text>

                            </TouchableOpacity >

                            <TouchableOpacity
                                onPressIn={() => this.remover( this.props.id = elementoLista.id)}
                                style={homeStyle.botaoAtualizarExcluir}>
                                <Text style={{ fontSize: 18, fontWeight: '800', color: 'white', textAlign: 'center' }}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                                




                    </View>
                    )
                )
                    }


            </ScrollView>
















        )
    }
}


export default ListagemCliente;





const estilos = StyleSheet.create({
    containerLista: { margin: 5, borderWidth: 5, borderColor: '#2f4f4f', padding: 5 },
    testos: { fontSize: 17, fontWeight: '700', color: 'white' },


})