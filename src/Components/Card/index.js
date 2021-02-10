import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./Styles";

const Card = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Image resizeMode="contain" style={styles.image} source={props.image} />
    </TouchableOpacity>
  );
};

export default Card;