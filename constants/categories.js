const CATEGORIES = [
  {
    id: "tech",
    label: "Tech",
    icon: "code-slash",
    color: "#6366f1",
  },
  {
    id: "dad",
    label: "Dad Jokes",
    icon: "happy",
    color: "#f59e0b",
  },
  {
    id: "desi",
    label: "Desi",
    icon: "flag",
    color: "#10b981",
  },
  {
    id: "dark",
    label: "Dark Humor",
    icon: "skull",
    color: "#ef4444",
  },
  {
    id: "roast",
    label: "Roast Me",
    icon: "flame",
    color: "#f97316",
    hasNameInput: true,
  },
];

const JOKES_PROMPTS = {
  tech: `Generate one short and genuinely funny programmer or developer joke.
Return ONLY two lines. Line 1 is the setup. Line 2 is the punchline.
No labels, no explanation, no quotation marks, no numbering.
Setup must be under 20 words. Punchline under 15 words.`,

  dad: `Generate one classic groan-worthy dad joke.
Return ONLY two lines. Line 1 is the setup. Line 2 is the punchline.
No labels, no explanation, no quotation marks, no numbering.
Setup must be under 20 words. Punchline under 15 words.`,

  desi: `Generate one light-hearted Indian humor joke in English.
It must be friendly, not offensive or stereotyping.
Return ONLY two lines. Line 1 is the setup. Line 2 is the punchline.
No labels, no explanation, no quotation marks, no numbering.
Setup must be under 20 words. Punchline under 15 words.`,

  dark: `Generate one clever dark humor joke. Witty and smart, not offensive or hateful.
Return ONLY two lines. Line 1 is the setup. Line 2 is the punchline.
No labels, no explanation, no quotation marks, no numbering.
Setup must be under 20 words. Punchline under 15 words.`,
};

const ROAST_ME = (
  name,
) => `Roast a person named "${name}" in one short, savage but friendly sentence.
Return ONLY the roast. No labels, no explanation, no quotation marks.
Keep it under 20 words.`;

export { CATEGORIES, JOKES_PROMPTS, ROAST_ME };