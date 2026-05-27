import { useState } from "react";
import { ROAST_ME, JOKES_PROMPTS } from "../constants/categories";
import { generateAIResponse } from "../utils/openrouterClient";

const useJoke = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateNewJoke = async (category, roastName) => {
    try {
      setLoading(true);
      setError(null);
      setJoke("");

      let prompt = "";

      if (category === "roast") {
        if (!roastName || roastName.trim() === "") {
          setError("Please enter a name to roast.");
          setLoading(false);
          return;
        }

        prompt = ROAST_ME(roastName);
      } else {
        prompt = JOKES_PROMPTS[category];
      }

      console.log("PROMPT =>", prompt);

      const generatedJoke = await generateAIResponse(prompt);

      if (generatedJoke) {
        setJoke(generatedJoke);
      } else {
        setError("Failed to generate joke. Please try again.");
      }
    } catch (err) {
      console.log("FULL ERROR =>", err);
      console.log("MESSAGE =>", err.message);

      setError(
        err.message || "An error occurred while generating the joke."
      );
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