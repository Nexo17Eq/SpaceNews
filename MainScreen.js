import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.busqueda}
          placeholder="Buscar..."
          placeholderTextColor="#888"
        />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Image
            source={{ uri: 'https://s1.1zoom.me/big0/796/Moon_Black_background_549479_1280x800.jpg' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>La luna</Text>
          <Text style={styles.texto}>La Luna es el único satélite natural de la Tierra. Con un diámetro ecuatorial de 3474,8 km, es el quinto satélite más grande del sistema solar</Text>
          <Image
            source={{ uri: 'https://us.123rf.com/450wm/rasslava/rasslava1905/rasslava190500044/146347750-planeta-j%C3%BApiter-aislado-en-negro.jpg' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>Jupiter</Text>
          <Text style={styles.texto}>Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.​ Es un gigante gaseoso que forma parte de los denominados planetas exteriores.</Text>
          <Image
            source={{ uri: 'https://img.freepik.com/fotos-premium/tierra-sobre-fondo-negro-aislado_338491-6953.jpg' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>La tierra</Text>
          <Text style={styles.texto}>Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. Tiene una superficie sólida y activa, con montañas, valles, cañones, llanuras y mucho más</Text>
          <Image
            source={{ uri: 'https://us.123rf.com/450wm/tristan3d/tristan3d1311/tristan3d131100009/23719443-una-representaci%C3%B3n-del-planeta-venus-sobre-un-fondo-negro-limpio.jpg' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>Venus</Text>
          <Text style={styles.texto}>Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero más pequeño después de Mercurio y Marte.</Text>
          <Image
            source={{ uri: 'https://us.123rf.com/450wm/sooniospro/sooniospro1912/sooniospro191200105/136381485-el-planeta-marte-en-alta-resoluci%C3%B3n-ubicado-en-el-mismo-sistema-solar-fondo-negro.jpg' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>Marte</Text>
          <Text style={styles.texto}>Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio</Text>
          <Text style={styles.texto}></Text>
          <Text style={styles.texto}></Text>
        </ScrollView>
      </View>
      <View style={styles.barranav}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{ uri: 'https://img.icons8.com/?size=80&id=KJ4lbZQcvJyn&format=png' }}
            style={styles.iconoNavegacion}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{ uri: 'https://img.icons8.com/?size=80&id=LHwA7uju9SxC&format=png' }}
            style={styles.iconoNavegacion}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{ uri: 'https://img.icons8.com/?size=80&id=kkd5Wia4CSsR&format=png ' }}
            style={styles.iconoNavegacion}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "black",
  },
  searchBar: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
  },
  busqueda: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
  },
  titulotexto: {  
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  texto: {
    color: 'white',
  },
  barranav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  iconoNavegacion: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
});

export default MainScreen;
