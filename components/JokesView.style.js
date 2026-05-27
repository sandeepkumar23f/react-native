import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#0b1220",
    borderRadius: 20,
    padding: 24,
    minHeight: 200,
    justifyContent: "center",
    marginVertical: 30,
    shadowColor: "#38bdf8",
    shadowOffset: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  loadingText: {
    color: "#38bdf8",
    textAlign: "center",
  },
  errorText: {
    color: "#f87171",
    textAlign: "center",
  },
  jokeText: {
    color: "#e2e8f0",
    textAlign: "center",
  },
  placeholderText: {
    color: "#e2e8f0",
    textAlign: "center",
  },
});

export default style;