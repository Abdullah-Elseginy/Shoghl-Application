import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import MainStack from './src/navigations/MainStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { persistor, store } from './src/redux/store';
import { COLORS } from './src/constants';

const App = () => {

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
          <MainStack />
        </PersistGate>
      </Provider>
  );
};

export default App;


