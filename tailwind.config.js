/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                soft: "0 10px 30px rgba(0,0,0,0.25)",
            },
            animation: {
                fall: "fall linear infinite",
            },
            keyframes: {
                fall: {
                    "0%": { transform: "translateY(-10vh)", opacity: "0" },
                    "10%": { opacity: "0.8" },
                    "100%": { transform: "translateY(110vh)", opacity: "0" },
                },
            },

        },
    },
    plugins: [],
};
