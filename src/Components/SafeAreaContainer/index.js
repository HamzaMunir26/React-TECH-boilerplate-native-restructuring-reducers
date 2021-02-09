import React from 'react';
import {SafeAreaView} from 'react-native';

//Style imports
import styles from './styles';

const SafeAreaContainer = (props) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default SafeAreaContainer;
