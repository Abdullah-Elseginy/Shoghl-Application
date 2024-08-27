/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import MainStack from './src/navigations/MainStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { LogBox, StatusBar } from 'react-native';
import { persistor, store } from './src/redux/store';
import { COLORS } from './src/constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
          <MainStack />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;


