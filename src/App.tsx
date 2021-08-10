/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { EventsStackScreens } from './navigation/AppNavigationStack';
import {Provider} from "react-redux";
import { store } from './store/configurationStore';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <EventsStackScreens/>
      </NavigationContainer>
    </Provider>
    
  );
};

export default App;
