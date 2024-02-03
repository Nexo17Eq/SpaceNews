import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/564x/2f/24/bc/2f24bcfe9a4e82f82ad5346a8e3db5b3.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.titulo}>Iniciar Sesión</Text>
          <View style={styles.formulario}>
            <Text style={styles.texto}>Enter your email</Text>
            <TextInput
              style={styles.input}
              onChangeText={(username) => this.setState({ username })}
            />
            <Text style={styles.texto}>Enter your password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />
            <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Main')}
          />
          </View>
          <Text style={styles.vinculo}>D̲o̲n̲'̲t̲_y̲o̲u̲_h̲a̲v̲e̲_a̲n̲_a̲c̲c̲o̲u̲n̲t̲?̲</Text>
        </View>
      </ImageBackground>
    );
  }
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formulario: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  texto: {
    color: 'white',
  },
  input: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
  },
  vinculo:{
    color: 'white',
    marginTop: 10,
  }
});
