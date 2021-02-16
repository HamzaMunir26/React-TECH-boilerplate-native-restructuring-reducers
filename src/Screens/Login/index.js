import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInputField} from '@/Components';
import {AppButton} from '@/Components';
import styles from './styles';
import {connect} from 'react-redux';
import {login} from '../../Stores/Actions/login';
import {Images} from '../../Utils';
import { NavigateToBase } from "../../Utils";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChangeHandler = (text, func, errorFunc) => {
    func(text);
    errorFunc('');
  };

  const onSubmit = () => {
     NavigateToBase(this.props.navigation, "Deliveries");
     this.props.navigation.navigate("Deliveries")
  };


  const usernameIcon=<Image source={Images.username} />
  const passwordIcon=<Image source={Images.password} />
      
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.logo} style={{ width: 250, height: 250}} />
      <Image source={Images.friday} />
      <KeyboardAwareScrollView contentContainerStyle={styles.innerContainer}>
          <AppInputField
            icon={usernameIcon}
            containerStyles={styles.userNameInput}
            fieldLabel={'Username'}
            inputStyles={styles.inputStylesUsername}
            onChangeText={(text) =>
              onChangeHandler(text, setEmail, setEmailError)
            }
            value={email}
          />
            {emailError !== '' && (
            <Text style={styles.errorLabel}>{emailError}</Text>
            )}   
          <AppInputField
            icon={passwordIcon}
            fieldLabel={'Password'}
            inputStyles={styles.inputStylesPassword}
            onChangeText={(text) =>
              onChangeHandler(text, setPassword, setPasswordError)
            }
            secureTextEntry={true}
            value={password}
          />
            {passwordError !== '' && (
              <Text style={styles.errorLabel}>{passwordError}</Text>
            )}  
          <AppButton
            loading={props.loading}
            onPress={() => onSubmit}
            buttonMainContainerStyles={styles.loginButtonStyles}
            label={'Sign In'}
          />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const Logout = () => {
  AsyncStorage.removeItem('accessToken');
  AsyncStorage.removeItem('user');
  props.navigation.reset({
    routes: [{name: 'Login'}],
  });
}

const mapStateToProps = (state) => {
  const {loading} = state.loginState;
  return {
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  login: (data, navigation) => {
    dispatch(login(data, navigation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login, Logout);