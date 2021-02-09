import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login} from '@/Screens';
import Logout from '../Screens/Login/index'
import {SplashScreen} from '@/Screens';
import {Deliveries} from '@/Screens';
import {Stats} from '@/Screens';
import {Settings} from '@/Screens';
import {Help} from '@/Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="My Deliveries" component={Deliveries} options={{title: 'My Deliveries',}}/>
        <Drawer.Screen name="Stats" component={Stats} options={{title: 'Stats',}}/>
        <Drawer.Screen name="Settings" component={Settings} options={{title: 'Settings',}}/>
        <Drawer.Screen name="Help" component={Help} options={{title: 'Help',}}/>
        <Drawer.Screen name="Logout" component={Logout} options={{title: 'Logout',}}/>
      </Drawer.Navigator>
    );
  }

const AppContainer = () => {
  return (
    <NavigationContainer>
      <DrawerStack>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Deliveries" component={Deliveries} />
          <Stack.Screen name="Stats" component={Stats} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
      </DrawerStack>
    </NavigationContainer>
  );
}

export default AppContainer;