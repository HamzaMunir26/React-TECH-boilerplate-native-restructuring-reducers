import {StyleSheet} from 'react-native';
import {Colors, Fonts, Adjust} from '../../Utils';
export default StyleSheet.create({
  buttonMainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  buttonContainer: {
    width: "100%",
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 25,
    backgroundColor: Colors.appColor,
    borderWidth: 1,
    borderColor: Colors.textColor,
  },
  buttonLabel: {
    ...Fonts.style.label,
    color: 'white',
  },
});
