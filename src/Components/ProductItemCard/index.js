import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const ProductItemCard = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.warning && styles.warningStyles]}
      activeOpacity={0.8}
      onPress={() => props.onClick()}
      disabled={!props.onClick}
    >
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.text}>{props.label}</Text>
        <Text style={styles.price}>
          {props.price ? `PKR ${props.price}` : props.requiredText}
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: props.image }}
      />
    </TouchableOpacity>
  );
};

export default ProductItemCard;
