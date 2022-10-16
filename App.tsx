import React from 'react';
import {SafeAreaView} from 'react-native';
import {PositionScreen} from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
