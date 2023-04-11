import { View, Text, Image } from "react-native";
import React, { memo } from "react";
import styles from "./styles";
import { mImages } from "../../../../assets/images";
import moment from "moment";

const PersonalDetails = ({ persionaldetails }) => {
  const {
    education = "",
    marital_status = "",
    dob,
    gender = "",
    telephone = "",
    parantage_type = "",
  } = persionaldetails;
  return (
    <View style={{ ...styles.contianer }}>
      <PersonalItemDetail
        iconName={mImages.man}
        detail={gender}
        title="Gender"
      />
      <PersonalItemDetail
        iconName={mImages.weddingrings}
        detail={marital_status}
        title="Marital Status"
      />
      <PersonalItemDetail
        iconName={mImages.familyicon}
        detail={parantage_type}
        title={`Parentage(${parantage_type})`}
      />
      <PersonalItemDetail
        iconName={mImages.phonecall}
        detail={telephone}
        title="Mobile"
      />
      <PersonalItemDetail
        iconName={mImages.calender}
        detail={moment(dob).format("DD-MMM-YYYY")}
        title="Date of Birth"
      />
      <PersonalItemDetail
        iconName={mImages.man}
        detail={education}
        title="Education"
      />
    </View>
  );
};

const PersonalItemDetail = ({ iconName, detail, title }) => {
  return (
    <View style={{ ...styles.itemwrapper }}>
      <Image
        style={{ width: 24, height: 24 }}
        source={iconName || ""}
        resizeMode="contain"
      />
      <Text style={{ ...styles.detialstyle }}>{detail} </Text>
      <Text style={{ ...styles.titlestyle }}>{title}</Text>
    </View>
  );
};

export default memo(PersonalDetails);
