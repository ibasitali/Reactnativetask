import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  whitecard: {
    width: width,
    height: 70,
    backgroundColor: "#ffffff",
  },
  graycard: {
    width: width,
    height: 70,
    backgroundColor: "#f3f3f3",
  },
  card: {
    position: "absolute",
    top: 13,
    width: width - 30,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
  imagewapper: {
    width: 90,
    height: 90,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  detailwrapper: {
    paddingLeft: 10,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: "500",
  },
  CardNumberStyle: {
    fontSize: 14,
    fontWeight: 400,
    paddingLeft: 5,
    color: "#05a45f",
  },
});
