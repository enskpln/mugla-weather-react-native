import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigations/Navigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <HomeStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;