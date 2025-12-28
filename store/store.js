import { proxy } from "valtio";

const state = proxy({
  intro: false,
  colors: [
    // Neutrals & Basics
    { color: "#FFFFFF", label: "Pure White" },
    { color: "#F5F5F5", label: "Off White" },
    { color: "#B0B0B0", label: "Silver Gray" },
    { color: "#353934", label: "Charcoal Black" },

    // Warm Premium Tones
    { color: "#EFBD4E", label: "Golden Yellow" },
    { color: "#D4AF37", label: "Metallic Gold" },
    { color: "#C19A6B", label: "Camel Brown" },
    { color: "#8B5A2B", label: "Coffee Brown" },
    { color: "#A0522D", label: "Sienna" },

    // Reds & Pinks
    { color: "#EF074E", label: "Crimson Red" },
    { color: "#B11226", label: "Burgundy" },
    { color: "#800020", label: "Wine Red" },
    { color: "#FF6F61", label: "Coral Rose" },
    { color: "#F4A6B8", label: "Blush Pink" },

    // Greens
    { color: "#556B2F", label: "Olive Green" },
    { color: "#1B5E20", label: "Forest Green" },
    { color: "#0B3D2E", label: "Bottle Green" },

    // Blues & Purples
    { color: "#726DE8", label: "Lavender Blue" },
    { color: "#4B0082", label: "Indigo" },
    { color: "#483D8B", label: "Dark Slate Blue" },
    { color: "#1E3A8A", label: "Royal Blue" },
    { color: "#0F3057", label: "Midnight Blue" },
    { color: "#4682B4", label: "Steel Blue" },

    // Earthy / Trendy Premium
    { color: "#EDE6D6", label: "Sand Beige" },
    { color: "#D2B48C", label: "Tan" },
    { color: "#B87333", label: "Copper" },
    { color: "#708090", label: "Slate Gray" },
  ],
  positions: [
    { position: [-0.09, 0.09, 0.15], name: "Chest Right" },
    { position: [0.09, 0.09, 0.15], name: "Chest Left" },
    { position: [0, 0.09, 0.15], name: "Chest Center (Upper)" },
    { position: [0, 0, 0.15], name: "Chest Center (Middle)" },
  ],
  decals: ["react", "three2", "mark"],
  scale: 5000,
  color: "#483D8B",
  decal: "mark",
  position: [0, 0.09, 0.15],
  image: "",
});

export default state;
