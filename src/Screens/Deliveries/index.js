import React from 'react';
import {connect} from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, FlatList } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import images from '../../Utils/Images';

const Tab = createMaterialTopTabNavigator();

const newOrderScreen = () => {
  
  const LeftContent = props => <Avatar.Icon {...props} icon={images.acceptedorders} />

  return (
      <Card>
        <Card.Title title="New Orders" subtitle="Details" left={LeftContent} />
        <Card.Content>
          <Title>Order Title</Title>
          <Paragraph>Sample Content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions >
          <Button icon={images.acceptedorders} mode="outlined" onPress={() => {alert('Order Confirmed')}}>Confirm </Button>
          <Button icon={images.rejectedorders} mode="outlined" onPress={() => {alert('Order Rejected')}}>Reject </Button>
        </Card.Actions>
      </Card>
    );
}

const onGoingScreen = () => {
  
  const LeftContent = props => <Avatar.Icon {...props} icon={images.pendingorders} />

  return (
    <Card>
    <Card.Title title="Ongoing Orders" subtitle="Details" left={LeftContent} />
    <Card.Content>
      <Title>Order Title</Title>
      <Paragraph>Sample Content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/720' }} />
    <Card.Actions style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button icon={images.gps} mode="contained">Get Direction </Button>
    </Card.Actions>
  </Card>
  );
}

const deliveredScreen = () => {
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
        component={newOrderScreen}
        options={{ tabBarLabel: 'New Order' }}
      />
      <Tab.Screen
        name="Ongoing"
        component={onGoingScreen}
        options={{ tabBarLabel: 'Ongoing' }}
      />
      <Tab.Screen
        name="Delivered"
        component={deliveredScreen}
        options={{ tabBarLabel: 'Delivered' }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Deliveries);