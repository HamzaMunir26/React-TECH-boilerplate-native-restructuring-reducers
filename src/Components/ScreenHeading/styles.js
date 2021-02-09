import {StyleSheet, Platform} from 'react-native';
import {Metrics, Adjust, Fonts, Colors} from '../../Utils';
import metrics from '../../Utils/Metrics';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    height: metrics.screenHeadingHeight,
  },
  text: {
    ...Fonts.style.heading,
    color: Colors.appColor,
  },
});
