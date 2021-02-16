import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: Colors.appBackgroundColor,
    ...Metrics.containerTopMargin,
    marginTop: 0,
    paddingTop: 150,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: "100%",
    overflow: "hidden",
    flexGrow: 1,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth - 20,
    padding: 30,
    // borderWidth: 1,
    borderColor: Colors.appColor,
    borderRadius: 5,
    flexGrow: 1,
    marginTop: 10,
  },
  buttonStyles: {
    marginVertical: Metrics.baseMargin,
    width: Metrics.screenWidth - 50,
  },
  buttonWidth: {
    width: Metrics.screenWidth - 50,
  },

  sliderContainer: {
    height: 150,
  },
});
