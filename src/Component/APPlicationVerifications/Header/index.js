import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={{ ...styles.headercontaine }}>
      <View style={{ ...styles.titlewrapper }}>
        <Text style={{ ...styles.headerTitle }}>GROWTECH</Text>
        <Text style={{ ...styles.headerSubtitle }}>
          Application Verifications
        </Text>
      </View>

      <View style={{ ...styles.notificationwrapper }}>
        <TouchableOpacity>
          <Ionicons
            name="md-notifications-outline"
            color={"#a5a5a5"}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 5 }}>
          <MaterialIcons name="menu" color={"#a5a5a5"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
