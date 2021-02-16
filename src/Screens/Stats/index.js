import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import images from '../../Utils/Images';

const Tab = createMaterialTopTabNavigator();

const lastSevenDays = () => {
  return(
    <SafeAreaView style={styles.container}>
       <View style={styles.innerContainer}>
       </View>
       <Image source={images.graph} />
    </SafeAreaView>
  )
}

const lastMonth = () => {
 return( 
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
      </View>
      <Image source={images.graph} />
    </SafeAreaView>
 )
}


const Stats = () => {
  return (
    <Tab.Navigator
      initialRouteName="Last 7 days"
      tabBarOptions={{
        activeTintColor: '#e91e99',
        labelStyle: { fontSize: 14 },
        style: { backgroundColor: 'yellow' },
      }}
    >
      <Tab.Screen
        name="Last 7 days"
        component={lastSevenDays}
        options={{ tabBarLabel: 'Last 7 days' }}
      />
      <Tab.Screen
        name="Last Month"
        component={lastMonth}
        options={{ tabBarLabel: 'Last Month' }}
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

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
