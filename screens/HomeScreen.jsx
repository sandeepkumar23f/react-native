import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import useJoke from "../hooks/useJoke.js";

const HomeScreen = () => {
  const { joke, loading, error, generateNewJoke } = useJoke();

  useEffect(() => {
    generateNewJoke("Sandeep", "roast");
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {loading && <ActivityIndicator size="large" />}

      {error && (
        <Text style={{ color: "red", marginBottom: 10 }}>
          {error}
        </Text>
      )}

      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        {joke}
      </Text>
    </View>
  );
};

export default HomeScreen;