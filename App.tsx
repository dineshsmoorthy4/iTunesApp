import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/themes/ThemeContext';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <StatusBar
            barStyle="dark-content" 
            backgroundColor="#ffffff"
          />
          <AppNavigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
