import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/736x/1b/31/f2/1b31f26f0711b58881569796642e4dbc.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titulo}>Welcome Back</Text>
            <Text style={styles.titulo}>to Space News!</Text>
          </View>
          <View style={styles.BotoneSeccion}>
            <Button
              title="Login"
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.Boton}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '30%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 2,
  },
  header: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  BotoneSeccion: {
    width: '40%',
    justifyContent: 'flex-end', 
    marginBottom: '30%',
  },
  Boton: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    fontSize: 20,
  },
});
