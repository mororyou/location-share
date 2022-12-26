import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigations/RootNavigator';
import { store } from './store';

export default function App() {
  LogBox.ignoreLogs([
    'Setting a timer',
    'AsyncStorage has been extracted from react-native core and will be removed in a future release',
  ]);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
