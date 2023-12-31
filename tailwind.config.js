/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ['10px', '16px'],
      },
      colors: {
        "primary-100": "#fdfcfb",
        "primary-200": "#fbf9f7",
        "primary-300": "#f8f5f3",
        "primary-400": "#f6f2ef",
        "primary-500": "#f4efeb",
        "primary-600": "#c3bfbc",
        "primary-700": "#928f8d",
        "primary-800": "#62605e",
        "primary-900": "#31302f",
        "secondary-100": "#f1eff3",
        "secondary-200": "#e4dee7",
        "secondary-300": "#d6cedc",
        "secondary-400": "#c9bdd0",
        "secondary-500": "#bbadc4",
        "secondary-600": "#968a9d",
        "secondary-700": "#706876",
        "secondary-800": "#4b454e",
        "secondary-900": "#252327",
        "dark-primary-100": "#d6cfe1",
        "dark-primary-200": "#ad9fc3",
        "dark-primary-300": "#846ea5",
        "dark-primary-400": "#5b3e87",
        "dark-primary-500": "#320e69",
        "dark-primary-600": "#280b54",
        "dark-primary-700": "#1e083f",
        "dark-primary-800": "#14062a",
        "dark-primary-900": "#0a0315",
        "accent-1-100": "#fff4d6",
        "accent-1-200": "#ffe8ad",
        "accent-1-300": "#ffdd83",
        "accent-1-400": "#ffd15a",
        "accent-1-500": "#ffc631",
        "accent-1-600": "#cc9e27",
        "accent-1-700": "#99771d",
        "accent-1-800": "#664f14",
        "accent-1-900": "#33280a",
        "accent-2-100": "#fff0e7",
        "accent-2-200": "#ffe1d0",
        "accent-2-300": "#fed1b8",
        "accent-2-400": "#fec2a1",
        "accent-2-500": "#feb389",
        "accent-2-600": "#cb8f6e",
        "accent-2-700": "#986b52",
        "accent-2-800": "#664837",
        "accent-2-900": "#33241b",
        "accent-3-100": "#d2dce9",
        "accent-3-200": "#a5b9d3",
        "accent-3-300": "#7895bd",
        "accent-3-400": "#4b72a7",
        "accent-3-500": "#1e4f91",
        "accent-3-600": "#183f74",
        "accent-3-700": "#122f57",
        "accent-3-800": "#0c203a",
        "accent-3-900": "#06101d",
      },
    },
  },
  plugins: [],
};
