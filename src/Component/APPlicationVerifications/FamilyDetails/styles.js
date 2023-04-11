import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  Container: {
    width: width - 30,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    elevation: 3,
    borderRadius: 8,
    overflow: "hidden",
    paddingBottom: 12,
  },
  cardHeader: {
    paddingLeft: 12,
    paddingVertical: 10,
    backgroundColor: "black",
    borderTopLeftRadius: 8,
  },
  cardtitlestyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  rowstyle: {
    flexDirection: "row",
    paddingTop: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowTitle: {
    fontSize: 14,
    color: "#555555",
    flex: 1,
  },
  rowdetail: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
    paddingLeft: 6,
  },
});
