import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView,Image } from 'react-native';


import { telaCadastroStyle } from "../estilos/estilos";

import ListagemCliente from "./listagemCliente";
import Cliente from '../model/cliente';

import ItemDatabase from '../databases/ItemDatabase'
 

class CadastarListarCliente extends Component{
    
    
    constructor(props){
        super(props)
            this.state ={
            nome: '',
            cpf: '',
            dataNascimento: '',
            dataAssiContrato: '',
            dataPagaLuguel: '',
            lista:[]
        }

    }

    Cadastrar = (nome, cpf, dataNascimento,dataAssiContrato,dataPagaLuguel) => {
       
        
        const novoCliente = new Cliente(nome, cpf, dataNascimento,dataAssiContrato,dataPagaLuguel);
        const DB = new ItemDatabase();
        DB.Inserir(novoCliente);
        this.ListarDados()

        
        //this.state.lista.push(novoCliente)
        //this.forceUpdate();



    }

    atualizar = (item) => {
        /*
        const banco = new ItemDatabase();
        banco.Atualizar(item);
        this.ListarDados();
        */
    }

    ListarDados = () => {
        const DB = new ItemDatabase()
        DB.Listar().then(listaCompleta => {this.setState({lista:listaCompleta})})
       
       // const banco = new ItemDatabase(); // criamos uma instancia de ItemDatabase

        /* chama o metodo Listar(). chama o metodo then(o metodo then recebe por parametro uma variavel  "listaComplera" que armazena nela o retorno do metodo listar(), ainda implementando o parametro de then, chamaos uma função => eroow function
            que no seu scopo vai chamar o metodo setstate(que vai pegar o retorno do metodo listar, que foi armazenado na variavel "listaCompleta,e acrescentar no vetor lista") )*/
        //banco.Listar().then(listaCompleta => { this.setState({ lista: listaCompleta }) });

        
    }

    remover = (id) => {

        const DB = new ItemDatabase();
        DB.Remover(id);
        this.ListarDados();
    }





    render() {
        const logo = require('../img/LogoSantosImobiliaria.png')
        return (

            <ScrollView>


                <View style={{ flexDirection: 'row', backgroundColor: '#869D92', width: '100%', alignItems: 'center', paddingTop: 10, justifyContent: 'space-between', }}>
                    <Text style={{ color: 'white', marginLeft: 30, fontSize: 20 }}>SantosImobiliária</Text>
                    <Image source={logo} style={{ marginRight: 30, width: 100, height: 55 }}></Image>
                </View>
                <View style={telaCadastroStyle.containerGeral}>

                    <View style={telaCadastroStyle.containerCampo}>
                        <Text style={telaCadastroStyle.testoTituloCampo}>Nome:</Text>
                        <Text style={telaCadastroStyle.testoTituloCampo}> teste se state recebe o valor digitado</Text>
                        <Text style={telaCadastroStyle.testoTituloCampo}> valor digitado:  {this.state.nome}</Text>
                        <TextInput onChangeText={(valorDig) => this.setState({ nome: valorDig })}
                            style={telaCadastroStyle.inputText} placeholder='digite o nome do locador'></TextInput>


                    </View>

                    <View style={telaCadastroStyle.containerCampo}>
                        <Text style={telaCadastroStyle.testoTituloCampo}>CPF:</Text>
                        <TextInput onChangeText={(valorDig) => this.setState({ cpf: valorDig })}
                            style={telaCadastroStyle.inputText} placeholder='CPF do locador'></TextInput>
                    </View>

                    <View style={telaCadastroStyle.containerCampo}>
                        <Text style={telaCadastroStyle.testoTituloCampo}>Data de Nascimento:</Text>
                        <TextInput onChangeText={(valorDig) => this.setState({ dataNascimento: valorDig })}
                            style={telaCadastroStyle.inputText} placeholder='data nascimento do locador'></TextInput>
                    </View>

                    <View style={telaCadastroStyle.containerCampo}>
                        <Text style={telaCadastroStyle.testoTituloCampo}>Data de Locação:</Text>
                        <TextInput onChangeText={(valorDig) => this.setState({ dataAssiContrato: valorDig })}
                            style={telaCadastroStyle.inputText} placeholder='data que o locador assinou contrato'></TextInput>
                    </View>

                    <View style={telaCadastroStyle.containerCampo}>
                        <Text style={telaCadastroStyle.testoTituloCampo}>Vencimento:</Text>
                        <TextInput onChangeText={(valorDig) => this.setState({ dataPagaLuguel: valorDig })}
                            style={telaCadastroStyle.inputText} placeholder='data de vencimento do aluguel '></TextInput>
                    </View>



                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPressIn={() => this.Cadastrar(this.state.nome, this.state.cpf, this.state.dataNascimento, this.state.dataAssiContrato, this.state.dataPagaLuguel)}
                        style={telaCadastroStyle.botaoCadastrar}>
                        <Text style={telaCadastroStyle.textoBotaoCadastrar}> Salvar</Text>
                    </TouchableOpacity>
                </View>

               

            </ScrollView>

        )
    }
}


export default CadastarListarCliente;




