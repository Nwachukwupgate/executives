/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xlc: "1500px",
				xs: "400px",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				inter: ["Inter"],
				Roobert: ["Roobert TWHINT"],
			},
			colors: {
				primaryColor: "var(--color-primary-main)",
				primaryColorLight: "var(--color-primary-light)",
				primaryColorDark: "var(--color-primary-dark)",
				primaryTextHighlight: "var(--color-primary-contrastText)", // default text color for blue

				successColor: "var(--color-success-main)",
				successColorLight: "var(--color-success-light)",
				successColorDark: "var(--color-success-dark)",
				successTextHighlight: "var(--color-success-contrastText)", // default text color for success

				errorColor: "var(--color-error-main)",
				errorColorLight: "var(--color-error-light)",
				errorColorDark: "var(--color-error-dark)",
				errorTextHighlight: "var(--color-error-contrastText)", // default text color for error
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

