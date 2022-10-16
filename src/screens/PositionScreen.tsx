import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaRosa}></View>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaVerde}></View>
      <View style={styles.cajaAzul}></View>
      <View style={styles.cajaRoja}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: 300,
    height: 300,
    /*     justifyContent: 'center',
    alignItems: 'center', */
    backgroundColor: '#28c4d9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'black',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'black',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: '#19d39d',
    borderWidth: 10,
    borderColor: 'black',
    top: 100,
    left: 100,
  },
  cajaAzul: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 10,
    borderColor: 'black',
    position: 'absolute',
    bottom: 0,
  },
  cajaRoja: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderWidth: 10,
    borderColor: 'black',
    position: 'absolute',
    top: 0,
  },
  cajaRosa: {
    /* width: 100,
    height: 100, */
    backgroundColor: 'pink',
    borderWidth: 10,
    borderColor: 'black',
    ...StyleSheet.absoluteFillObject,
  },
});

/* - Sobre Position:
 * El position en RN siempre es relative. Relativo respecto al padre. Aunque indiquemos position: 'absolute'.
 * Cuando usamos top, bottom, left, rigth en absolute estamos actuando sobre toda la pantalla.
 * Cuando usamos top, bottom, left, rigth en relative estamos actuando sobre el padre.
 * Sería un position relative absolute. Diferencias:
 * Con el relative el punto width: 0 height: 0 está en la esquina superior izquierda y en el absolute
 * el punto 0 0 está abajo a la izquierda y los top, bottom, rigth, left actuan al contrario que es relative.
 * También el absolute le caerá encima al relative si coinciden.
 *
 */
