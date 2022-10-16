import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.5}} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    /* width: '50%', */
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
  },
});

/**
 * NOTAS:
 * - Los <View> por defecto tienen 0 de width y 0 de height
 * - const {width, height} = Dimensions.get('window'); ->
 * Obtenemos las dimensiones de la pantalla física del smartphone pero si
 * ponemos este en horizontal siguen igual, no cambia, ya que el dispositivo tampoco cambia
 * de tamaño.
 * - style={{...styles.cajaMorada, width: width * 0.5}} -> al final los estilos aquí son
 * simples objetos de JS. añadimos la propiedad width al objeto cajaMorada. Propiedad que obtenemos
 * gracias al hook que obtiene las dimensiones en tiempo real de la pantalla. Y si esta la multiplicamos
 * por 0.20 obtenemos el 50% del total de la pantalla.
 *
 */
