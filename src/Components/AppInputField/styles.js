import {StyleSheet} from 'react-native';
import { block } from 'react-native-reanimated';
import {Metrics, Fonts, Colors} from '../../Utils';
export default StyleSheet.create({
  fieldContainer: {
    width: Metrics.screenWidth - 50,
    marginHorizontal: 50,
    flexDirection: 'row',
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderColor: Colors.appColor,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#FFFFFF'

  },
  fieldLabel: {
    ...Fonts.style.label,
    marginBottom: 8,
  },
  errorLabel: {
    ...Fonts.style.error,
    paddingVertical: 5,
  },
  input: {
    height: 48,
    paddingHorizontal: 13,
    backgroundColor: '#FFFFFF',
    width: 50,
    display:'flex',
    flex: 3,
    textAlign:"center",
    ...Fonts.style.input,
  },
  customIcon:{
    zIndex:1,
    borderWidth:0,
  }
});
