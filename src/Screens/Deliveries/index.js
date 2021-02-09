import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const NeworderScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>New Orders!</Text>
    </View>
  );
}

const OngoingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ongoing!</Text>
    </View>
  );
}

const DeliveredScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Delivered!</Text>
    </View>
  );
}

const Deliveries = () => {
  return (
    <Tab.Navigator
      initialRouteName="New Order"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 14 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="New Order"
        component={NeworderScreen}
        options={{ tabBarLabel: 'New Order' }}
      />
      <Tab.Screen
        name="Ongoing"
        component={OngoingScreen}
        options={{ tabBarLabel: 'Ongoing' }}
      />
      <Tab.Screen
        name="Delivered"
        component={DeliveredScreen}
        options={{ tabBarLabel: 'Delivered' }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Deliveries);