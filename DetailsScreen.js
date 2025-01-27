import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const DetailsScreen = ({ route }) => {
  const { category } = route.params; // Get the category from route.params

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 24.7136,
            longitude: 46.6753,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 24.7136,
              longitude: 46.6753,
            }}
            title={category}
            description="123 Anywhere Street, Any City"
          />
        </MapView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.placeTitle}>{category}</Text>
        <Text style={styles.placeSubtitle}>123 Anywhere St, Any City, ST 12345</Text>
        <Text style={styles.placeStatus}>Open • Closes 8:00 PM</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 18,
    color: '#4D5A46',
  },
  mapContainer: {
    height: 200,
    width: '100%',
  },
  map: {
    flex: 1,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  placeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  placeSubtitle: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 8,
  },
  placeStatus: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  sectionContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

});

export default DetailsScreen;