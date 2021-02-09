import React, {useEffect, useState} from 'react';
import {Image, Animated} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {Images} from '../../Utils';

const isUserLogin = async (navigation) => {
  try {
    const value = await AsyncStorage.getItem('accessToken');
    const role = await AsyncStorage.getItem('role');
    if (value !== null) {
      if (role === Role.Doctor) {
        navigation.reset({
          routes: [{name: 'Login'}],
        });
      } else {
        navigation.reset({
          routes: [{name: 'Login'}],
        });
      }
    } else {
      navigation.reset({
        routes: [{name: 'Login'}],
      });
    }
  } catch (error) {
    // Error retrieving data
  }
};

const SplashScreen = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  useEffect(() => {
    setTimeout(() => {
      isUserLogin(props.navigation);
    }, 4000);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{...styles.container, opacity: fadeAnim}}>
      <Image style={styles.logo} source={Images.logo} resizeMode="contain" />
    </Animated.View>
  );
};

export default SplashScreen;
