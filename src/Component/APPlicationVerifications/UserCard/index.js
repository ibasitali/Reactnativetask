import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UserCard = ({ fullName, CNICNumber, profileImage }) => {
  return (
    <View style={{ position: "relative" }}>
      <View style={{ ...styles.whitecard }} />
      <View style={{ ...styles.graycard }} />
      <View style={{ ...styles.card }}>
        <View style={{ ...styles.imagewapper }}>
          <Image
            style={{ width: 90, height: 90 }}
            source={{ uri: profileImage }}
            resizeMode="contain"
          />
        </View>
        <View style={{ ...styles.detailwrapper }}>
          <Text style={{ ...styles.nameStyle }}>{fullName}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={18}
              color="#05a45f"
            />
            <Text style={{ ...styles.CardNumberStyle }}>{CNICNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
