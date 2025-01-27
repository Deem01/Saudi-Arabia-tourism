import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Create an Animated.Value for opacity
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Fade-in animation when the component mounts
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Target opacity value
      duration: 1500, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Static Image (no animation) */}
      <Image source={require('./assets/Login.png')} style={styles.image} />

      {/* Animated Text and Buttons */}
      <Animated.View style={{ opacity: fadeAnim }}>
      <View style={styles.space} />
      <View style={styles.space} />
        <Text style={styles.title}>Welcome to Riyadh</Text>
        <View style={styles.space} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: '#4f602c',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    marginTop: -200,
  },
  button: {
    backgroundColor: '#4f602c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 30,
  },
  space: {
    width: 20,
    height: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;