import React, { useEffect } from 'react';
import MainStack from './src/navigations/MainStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { LogBox, StatusBar } from 'react-native';
import { persistor, store } from './src/redux/store';
import { COLORS } from './src/constants';
import { ProfileScreen } from './src/screens';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
        <MainStack />
        {/* <ProfileScreen /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;


