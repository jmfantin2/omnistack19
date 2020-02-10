import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../services/api';

//that's a very nasty hotfix... remote uri is not working atm
//i'm very sorry about this and the Flatlist Images :(
import rocketseat from '../assets/companies/rocketseat.jpg'
import southsystem from '../assets/companies/southsystem.jpg'
import taskforce from '../assets/companies/taskforce.jpg'

function SpotList({ tech, navigation }) {

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech }
      });
      setSpots(response.data);
    }
    loadSpots();
  }, []);

  function handleNavigate(id) {
    navigation.navigate('Book', { id });
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Empresas que usam <Text style={styles.titleBold}>{tech}</Text></Text>

      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              style={styles.thumbnail}
              source={
                (item.company.charAt(0) === 'R' ? rocketseat :
                  (item.company.charAt(0) === 'S' ? southsystem : taskforce)
                )
              }
            />
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : 'Gratuito'}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNavigate(item._id)}
            >
              <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  titleBold: {
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 20,
  },
  listItem: {
    marginRight: 15,
  },
  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2,
  },
  company: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    color: '#999',
    marginTop: 5
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default withNavigation(SpotList);