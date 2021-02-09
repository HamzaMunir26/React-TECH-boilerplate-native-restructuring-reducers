import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Images from '../../Utils/Images';

const Stats = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}></View>
      <Image source={Images.graph} />
      <Image source={Images.payments} />
      <Image source={Images.rejectedorders} />
      <Image source={Images.pendingorders} />
      <Image source={Images.acceptedorders} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
