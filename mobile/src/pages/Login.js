import React, {useState, useEffect} from  'react';
import {KeyboardAvoidingView, AsyncStorage, View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native'

import api from '../services/api';

import logo from '../assets/logo.png'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user){
        navigation.navigate('List');
      }
    });
  }, []);

  // deps array is empty [] means that it only runs one time

  async function handleSubmit(){
    const response = await api.post('/sessions',{
      email
    });
    const { _id } = response.data;

    console.log("[SESSION CREATED] \nemail: ", email, "\ntechs: ", techs, "\n_id: ", _id);

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('techs', techs);

    navigation.navigate('List');
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
          autoCorrect={false}
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
    height: 80,
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