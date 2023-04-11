import { Dimensions, StyleSheet } from "react-native";

const { width, heigh } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  contianer: {
    backgroundColor: "#fffff",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 15,
  },
  itemwrapper: {
    width: width / 3,
    paddingLeft: 10,
    // paddingRight: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  detialstyle: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 5,
  },
  titlestyle: {
    fontSize: 12,
    color: "#555555",
  },
});
