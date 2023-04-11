import { View, Text } from "react-native";
import React, { memo } from "react";
import styles from "./styles";

const RequestAmountCard = () => {
  return (
    <View style={{ ...styles.Container }}>
      <View style={{ ...styles.cardHeader }}>
        <Text style={{ ...styles.cardtitlestyle }}>Request Amount</Text>
      </View>
      <View style={{ paddingHorizontal: 12 }}>
        <CustomRow title={"Request Amount"} detail={"250,000"} />
        <CustomRow title={"Category"} detail={"Category"} />
        <CustomRow title={"Purpose"} detail={"Purpose"} />
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#fb0000",
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 12,
              marginBottom: 6,
            }}
          >
            Pending
          </Text>
        </View>
      </View>
    </View>
  );
};

const CustomRow = ({ title, detail }) => {
  return (
    <View style={{ ...styles.rowstyle }}>
      <Text style={{ ...styles.rowTitle }}>{title}</Text>
      <Text style={{ ...styles.rowdetail }}>{detail}</Text>
    </View>
  );
};

export default memo(RequestAmountCard);
