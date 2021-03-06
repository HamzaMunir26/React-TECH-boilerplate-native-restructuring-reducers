import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Utils';
export default StyleSheet.create({
  fieldContainer: {
    width: Metrics.screenWidth - 50,
  },
  fieldLabel: {
    ...Fonts.style.input,
    fontWeight: '500',
    color: Colors.appColor,
  },
  errorLabel: {
    ...Fonts.style.error,
  },
  input: {
    height: 45,
    marginTop: 5,
    paddingHorizontal: 13,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderColor: Colors.appColor,
    borderWidth: 1,
    borderRadius: 5,
    ...Fonts.style.input,
  },
});
