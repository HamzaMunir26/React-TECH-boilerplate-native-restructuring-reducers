import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Images from '../../Utils/Images';

const Help = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}></View>
      <Image source={Images.helptube} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Help);
