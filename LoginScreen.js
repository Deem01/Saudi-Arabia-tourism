import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { FIREBASE_AUTH } from './firebaseConfig';  // استيراد التوثيق من إعدادات Firebase
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log(response);
      alert('Logged in successfully');
      navigation.navigate('Main'); // الانتقال إلى الصفحة الرئيسية
    } catch (error) {
      console.log(error);
      alert('Login failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log(response);
      alert('Account created successfully');
    } catch (error) {
      console.log(error);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/log-image.png')} style={styles.headerImage} />
      <Text style={styles.title}>Log in</Text>
      <TextInput
        value={email}
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        value={password}
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.linkText} onPress={signUp}>
            Don't have an account? Sign up
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  plant: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 80,
    height: 100,
    resizeMode: 'contain',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'absolute', // لجعل الصورة ثابتة في الأعلى
    top: 0, // لتثبيت الصورة في أعلى الصفحة

   
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4f602c',
    marginBottom: 20,
  },
  mapContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
    elevation: 5,
  },
  map: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  button: {
    width: 250,
    paddingVertical: 14,
    backgroundColor: '#4f602c',
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#4f602c',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  linkText: {
    color: '#347026',
    marginTop: 15,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});


export default LoginScreen;
