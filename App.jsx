import React, { useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import { useFreeRasp } from 'freerasp-react-native';
import freeRaspConfig from './freerasp.config';

// Define threat response actions
const threatResponses = {
  privilegedAccess: () => Alert.alert('Threat detected', 'Privileged access detected!'),
  debug: () => Alert.alert('Threat detected', 'Debugger detected!'),
  simulator: () => Alert.alert('Threat detected', 'Simulator detected!'),
};

const App = () => {
  // Initialize freeRASP with the config and threat responses
  useFreeRasp(freeRaspConfig, threatResponses);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, World! Welcome to Ignite + freeRASP!</Text>
    </View>
  );
};

export default App;
