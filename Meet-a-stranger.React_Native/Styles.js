import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  btnDefault: {
    padding: 10,
    paddingHorizontal: 24,
    backgroundColor: "#007bff",
    borderRadius: 4,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 20,
  },
  textWhite: {
    color: "#fff",
  },
  textSecondary: {
    color: "#ffc107",
  },
  textDarkOrange: {
    color: "#d6a100",
  },
  p1: {
    padding: "1%",
  },
  p2: {
    padding: "4%",
  },
  p3: {
    padding: "6%",
  },
  p4: {
    padding: "10%",
  },
  bgDefaultOrange: {
    backgroundColor: "#ffc107",
  },
  bgWhite: {
    backgroundColor: "#FFF",
  },
  flex2: {
    flex: 2,
  },
  img: {
    height: "100%",
    minWidth: "100%",
    resizeMode: "contain",
  },
  input: {
    margin: 4,
    borderBottomColor: "#9AC4F8",
    borderBottomWidth: 2,
    minHeight: 40,
    minWidth: "80%",
    padding: 4,
  },
  inputOnFocus: {
    borderBottomColor: "#7ea6d9",
    borderRadius: 0,
  },
});
