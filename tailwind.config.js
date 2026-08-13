/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				navy: "#0B1B3A",
				"navy-soft": "#132A54",
				surface: "#F7F9FC",
				"surface-dim": "#ECF1F8",
				ink: "#10182B",
				slate: "#5B6B85",
				"slate-light": "#8B98AE",
				cyan: "#22C1D6",
				teal: "#0EA5A8",
				accentBlue: "#2563EB",
				accentGreen: "#16A34A",
				accentPurple: "#7C3AED",
				accentOrange: "#F97316"
			},
			fontFamily: {
				display: ["Sora", "-apple-system", "sans-serif"],
				body: ["Inter", "-apple-system", "sans-serif"]
			},
			maxWidth: {
				content: "1180px"
			},
			backgroundImage: {
				"hero-gradient": "linear-gradient(115deg, #0B1B3A 0%, #132A54 55%, #0E4C63 100%)",
				"footer-gradient": "linear-gradient(115deg, #0B1B3A 100%, #132A54 0%, #0E4C63 100%)",
			}
		}
	},
	plugins: []
};
