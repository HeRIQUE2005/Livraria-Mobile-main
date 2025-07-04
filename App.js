import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function App() {

  const [email, setEmail] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')


  async function CadastroUsuario() {
    const resposta = await Cademail.get(`${email}/json`)
    setCadastrodeDados(resposta.data)
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar backgroundColor='#000000' barStyle='light-content' translucent={false} />
        <Text style={styles.email}>Insira o email</Text>
        <TextInput
          placeholder='Digite o Email'
          value={email}
          onChange={setEmail}
        />
        <Text style={styles.usuario}>Insira o usuario</Text>
        <TextInput
          placeholder='Digite o Nome'
          value={usuario}
          onChange={setUsuario}
        />
        <Text style={styles.senha}>Coloque a Senha</Text>
        <TextInput
          placeholder='Digite o Senha'
          value={senha}
          onChange={setSenha}
        />
        
        <TouchableOpacity onPress={CadastroUsuario}><Text>Enviar</Text></TouchableOpacity>
      </View>


    </SafeAreaView>


  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  senha:{
    backgroundColor: '#3333',
    marginTop: 10,
    justifyContent: 'center'
  },

  

})



