import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#001F5B", // Navy Blue (ABM Engineering)
                    light: "#003380",
                    dark: "#000a33",
                },
                secondary: {
                    DEFAULT: "#FDB913", // Gold/Yellow (ABM Engineering)
                    light: "#fed466",
                    dark: "#c78d02",
                },
                neutral: {
                    50: "#F9FAFB",
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    300: "#D1D5DB",
                    400: "#9CA3AF",
                    500: "#6B7280",
                    600: "#4B5563",
                    700: "#374151",
                    800: "#1F2937",
                    900: "#111827",
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xl": "1400px",
                },
            },
        },
    },
    plugins: [],
};
export default config;
