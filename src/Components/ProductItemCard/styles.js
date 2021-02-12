import { StyleSheet, Platform, Dimensions } from "react-native";
import { Adjust, Fonts, Colors, Metrics } from "../../utils";

export default StyleSheet.create({
  container: {
    width: Metrics.innerContainerWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: Colors.appColor,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    paddingHorizontal: 15,
    shadowOpacity: 0.29,
    shadowRadius: 1,
    elevation: 2,
  },
  image: {
    width: Adjust(70),
    height: Adjust(70),
    marginVertical: 10,
  },
  text: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.base,
    color: "black",
    width: Adjust(190),
  },
  price: {
    color: Colors.appColor,
    fontSize: Fonts.size.medium,
    marginTop: 5,
  },
  warningStyles: {
    borderColor: "red",
    borderWidth: 1,
  },
});
