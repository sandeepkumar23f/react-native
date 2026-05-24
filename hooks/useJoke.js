import { useState } from "react";
import { JOKES_PROMPTS, ROAST_ME } from "../constants/categories";
import { model } from "../utils/geminiClient";

const useJoke = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateNewJoke = async (roastName, category) => {
    try {
      setLoading(true);
      setError(null);
      setJoke("");

      let prompt = "";

      if (category === "roast") {
        if (!roastName || roastName.trim() === "") {
          setError("Please enter a name to roast.");
          return;
        }

        prompt = ROAST_ME(roastName);
      } else {
        prompt = JOKES_PROMPTS[category];
      }

      const result = await model.generateContent(prompt);

      const generatedJoke = result.response.text();

      if (generatedJoke) {
        setJoke(generatedJoke);
      } else {
        setError("Failed to generate joke.");
      }
    } catch (err) {
      console.log("FULL ERROR =>", err);
      console.log("MESSAGE =>", err.message);

      setError(err.message || "Error generating joke.");
    } finally {
      setLoading(false);
    }
  };

  return {
    joke,
    loading,
    error,
    generateNewJoke,
  };
};

export default useJoke;
