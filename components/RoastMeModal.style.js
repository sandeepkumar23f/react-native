import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    padding: 20,
  },
  modal: {
    padding: 20,
    backgroundColor: "#0b1220",
    borderRadius: 16,
  },
  modalTitle: {
    color: "#e2e8f0",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    padding: 12,
    color: "#fff",
    marginBottom: 15,
    backgroundColor: "#020617",
  },
  button: {
    backgroundColor: "#0ea5e9",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  genrateButtonText: {
    color: "#020617",
    fontWeight: "700",
  },
  cancelButtonText: {
    color: "#94a3b8",
    marginTop: 10,
    textAlign: "center",
  },
});

export default style;