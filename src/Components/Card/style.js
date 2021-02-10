import { StyleSheet, Platform, Dimensions } from "react-native";
import { Adjust, Colors } from "../../utils";

export default StyleSheet.create({
  container: {
    width: Adjust(100),
    height: Adjust(100),
    borderWidth: 0.67,
    borderColor: Colors.appColor,
    borderRadius: 10,
    paddingHorizontal: 3,
    backgroundColor: "white",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    marginRight: 10,
    height: 110,
    borderRadius: 10
  }
});