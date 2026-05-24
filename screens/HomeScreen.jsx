import { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import useJoke from "../hooks/useJoke.js";

const HomeScreen = () => {
  const { joke, loading, error, generateNewJoke } = useJoke();

  const fetchJoke = () => {
    generateNewJoke("Sandeep", "roast");
  };

  useEffect(() => {
    fetchJoke();
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
          fontSize: 22,
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        {joke}
      </Text>

      <TouchableOpacity
        onPress={fetchJoke}
        style={{
          backgroundColor: "#111",
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Generate New Joke
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;