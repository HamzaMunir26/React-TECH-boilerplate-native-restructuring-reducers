// import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from '../Constants/login';
import AsyncStorage from '@react-native-community/async-storage';
import {setHeaderWithToken} from '../../Config/index';
import Toast from 'react-native-simple-toast';
import loginService from '../../Services/loginService';

const login = (data, navigation) => {
  // return (dispatch) => {
  //   dispatch({type: LOGIN});
  //   loginService(data, {})
  //     .then((response) => {
  //       if (response.status === 200) {
  //         dispatch({type: LOGIN_SUCCESS, user: response.data.user});
  //         let token = response.data.token;
  //         setHeaderWithToken(response.data.token);
  //         AsyncStorage.setItem('accessToken', JSON.stringify(token));
  //         AsyncStorage.setItem('user', JSON.stringify(response.data.deliveries));
  //         navigation.reset({
  //           routes: [{name: 'Deliveries'}],
  //         });
  //       } else {
  //         Toast.showWithGravity(response.data.Message, Toast.LONG, Toast.TOP);
  //         dispatch({type: LOGIN_FAILED, message: response.data.message});
  //       }
  //     })
  //     .catch((error) => {
  //       Toast.showWithGravity('Something went wrong', Toast.LONG, Toast.TOP);
  //       dispatch({type: LOGIN_FAILED, message: error});
  //     });
  // };
};

export default login;