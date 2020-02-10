import React, { useState, useEffect } from  'react';
import {SafeAreaView, AsyncStorage, Image, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native'

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List() {

  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());
      setTechs(techsArray);
    })
  },[]);

  return(
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
    height: 60,
    resizeMode: "contain"
  },
});