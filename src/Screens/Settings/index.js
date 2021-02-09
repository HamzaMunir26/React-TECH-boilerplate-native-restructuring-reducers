import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {AppButton} from '@/Components'

const Settings = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}></View>
      <AppButton
        buttonMainContainerStyles={styles.buttonStyles}
        label={'Change Password'}
      />
      <AppButton
        buttonMainContainerStyles={styles.buttonStyles}
        label={'My colleagues'}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
