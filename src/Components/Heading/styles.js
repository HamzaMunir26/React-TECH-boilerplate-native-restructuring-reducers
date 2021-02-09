import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Utils';

export default StyleSheet.create({
  heading: {
    ...Fonts.style.heading,
    color: Colors.appColor,
    padding: Metrics.baseMargin,
  },
});
