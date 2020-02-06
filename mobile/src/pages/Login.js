import React, {useState, setState} from  'react';
import {KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native'

import api from '../services/api';

import logo from '../assets/logo.png'

export default function Login() {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  async function handleSubmit(){
    console.log(email);
    console.log(techs);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

      <Image source={logo} style={styles.logo}/>
      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="jmfantin@taskforce.com.br"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>TECNOLOGIAS</Text>
        <TextInput
          style={styles.input}
          placeholder="Separe-as por vírgulas"
          placeholderTextColor="#999"
          value={techs}
          onChangeText={setTechs}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Encontrar Spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '40%',
    height: '40%',
    resizeMode: "contain"
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});