import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { getProducts } from "./actions";
import styles from "./styles";
import { Header, ProductItemCard, HeaderImage } from "../../components";
import { DrawerActions } from "react-navigation";
import { Images, Metrics, Adjust } from "../../utils";

const Tab = createMaterialTopTabNavigator();

const img = [Images.slider1, Images.slider2, Images.slider3];
console.log(this.props.products);

const NeworderScreen = () => {
  return (
    <View>
        <HeaderImage>
          <View style={styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              style={styles.itemContainer}
              data={
                this.props.products.length > 0 &&
                this.props.products[0].sort((a, b) => a.position - b.position)
              }
              renderItem={({ item }) => (
                <ProductItemCard
                  onClick={() =>
                    this.props.navigation.navigate("ProductDetail", {
                      itemId: item.id,
                      subItem: item,
                      image: item.images.large,
                    })
                  }
                  image={item.images.medium}
                  label={item.name}
                  price={item.price.delivery}
                />
              )}
            />
          </View>
        </HeaderImage>
      </View>
    );
}

const OngoingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <HeaderImage>
          <View style={styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              style={styles.itemContainer}
              data={
                this.props.products.length > 0 &&
                this.props.products[0].sort((a, b) => a.position - b.position)
              }
              renderItem={({ item }) => (
                <ProductItemCard
                  onClick={() =>
                    this.props.navigation.navigate("ProductDetail", {
                      itemId: item.id,
                      subItem: item,
                      image: item.images.large,
                    })
                  }
                  image={item.images.medium}
                  label={item.name}
                  price={item.price.delivery}
                />
              )}
            />
          </View>
        </HeaderImage>
      </View>
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
  const { products } = state.categoryState;
  const { Categories } = state.homeState;
  return {
    products,
    Categories,
  };
};
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getProducts: (category_id, Categories) => {
    dispatch(getProducts(category_id, Categories));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Deliveries);