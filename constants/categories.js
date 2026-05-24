const CATEGORIES = [
  {
    id: "tech",
    label: "Tech",
    icon: "code-slash",
    color: "#3B82F6",
  },
  {
    id: "dark",
    label: "Dark",
    icon: "moon",
    color: "#1F2937",
  },
  {
    id: "dad",
    label: "Dad Jokes",
    icon: "happy",
    color: "#F59E0B",
  },
  {
    id: "pun",
    label: "Puns",
    icon: "bulb",
    color: "#10B981",
  },
  {
    id: "animal",
    label: "Animal",
    icon: "paw",
    color: "#8B5CF6",
  },
  {
    id: "food",
    label: "Food",
    icon: "fast-food",
    color: "#EF4444",
  },
  {
    id: "school",
    label: "School",
    icon: "school",
    color: "#06B6D4",
  },
  {
    id: "office",
    label: "Office",
    icon: "briefcase",
    color: "#F97316",
  },
  {
    id: "relationship",
    label: "Relationship",
    icon: "heart",
    color: "#EC4899",
  },
  {
    id: "sports",
    label: "Sports",
    icon: "football",
    color: "#22C55E",
  },
  {
    id: "movies",
    label: "Movies",
    icon: "film",
    color: "#6366F1",
  },
  {
    id: "random",
    label: "Random",
    icon: "shuffle",
    color: "#A855F7",
  },
];

const JOKES_PROMPTS = {
  tech:
    "Generate a funny programming or tech joke. Keep it short, witty, and easy to understand.",

  dark:
    "Generate a dark humor joke that is funny but not offensive, hateful, or harmful.",

  dad:
    "Generate a classic dad joke with a cheesy punchline.",

  pun:
    "Generate a clever pun-based joke using wordplay.",

  animal:
    "Generate a funny animal-related joke suitable for all ages.",

  food:
    "Generate a hilarious food joke with a playful punchline.",

  school:
    "Generate a funny school or student-life joke.",

  office:
    "Generate a relatable office or workplace joke.",

  relationship:
    "Generate a lighthearted relationship or dating joke.",

  sports:
    "Generate a funny sports-related joke.",

  movies:
    "Generate a movie or celebrity-inspired joke without being offensive.",

  random:
    "Generate a completely random and unexpected funny joke.",
};
const ROAST_ME = (
    name,
)=> `Roast a persen named "${name}" is one short, savage but friendly sentence.
Return ONLY the roast. No labels, no explanations, no quotation marks.
Keep it under 20 words`

export { CATEGORIES,JOKES_PROMPTS,ROAST_ME};