import { Text, View } from "react-native";
import React, { memo } from "react";
import styles from "./styles";

const FamilyDetails = ({ familydetail }) => {
  return (
    <View style={{ ...styles.Container }}>
      <View style={{ ...styles.cardHeader }}>
        <Text style={{ ...styles.cardtitlestyle }}>Family Details</Text>
      </View>
      {familydetail?.map((item, index) => {
        return (
          <View key={index + ""} style={{ paddingHorizontal: 12 }}>
            <CustomRow title="Family Member Name" detail={item?.mf_name} />
            <CustomRow title="Family Member CNIC" detail={item?.mf_cnic} />
            <CustomRow title="Religion" detail={item?.mf_religion || "NA"} />
            <CustomRow
              title="Is Disable"
              detail={item?.mf_is_disable || "NA"}
            />
            <CustomRow
              title={"Business Address"}
              detail={item?.mf_business_address || "NA"}
            />
          </View>
        );
      })}
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

export default memo(FamilyDetails);
