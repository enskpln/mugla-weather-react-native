/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
// import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
//   const isLoggedIn = useSelector(state => state.reducers.loginReducer.loginReducer.logged);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
