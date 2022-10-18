import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // abarca todo el espacio disponible en la dirección que esté el flex
    //height: 400,
    backgroundColor: '#28c4d9',
    //justifyContent: 'flex-end',
    //flexDirection: 'row',
    //alignItems: 'flex-end',
    //flexWrap: 'wrap', // Si no caben todos los elementos en el padre, con 'wrap' los entramos
  },
  caja1: {
    //flex: 2,
    //flex: 3, // 3 + 2 + 1 = 6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'center',
  },
  caja2: {
    //flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-start',
  },
  caja3: {
    //flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-end',
  },
});

/**
 * NOTAS:
 * - La propiedad flex reparte los hijos por la pantalla. Si ponemos flex 1 y solo hay un hijo, este ocupará toda
 * la pantalla. Si tenemos varios y en todos ponemos flex: 1 estos ocuparan el mismo espacio repartido.
 * Debemos imaginar que la pantalla tiene un numero total, por ejemplo 10. Si tenemos tres elementos y
 * al elemento 1 le damos flex: 4, al elemento 2 flex: 4 y al elemento 3: flex: 2, estos ocuparan respectivamente
 * un 40% 40% 20% de la pantalla.
 */
