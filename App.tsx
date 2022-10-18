import React from 'react';
import {SafeAreaView} from 'react-native';
import {TareaScreen} from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425b'}}>
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
