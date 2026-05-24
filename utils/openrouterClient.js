const OPENROUTER_API_KEY = process.env.EXPO_PUBLIC_OPENROUTER_API_KEY;

export const generateAIResponse = async (prompt) => {
  try {
    console.log("API KEY =>", OPENROUTER_API_KEY);

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("FULL OPENROUTER RESPONSE =>", data);

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data?.choices?.[0]?.message?.content || "No joke generated";
  } catch (error) {
    console.log("OPENROUTER ERROR =>", error);
    throw error;
  }
};