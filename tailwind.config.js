/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
	  extend: {
		colors: {
		  primary: '#101a35',
		  secondary: '#76777c',
		  accent: '#e2e2e2',
		  light: '#97dbff',
		},
	  },
	},
	plugins: [
	  import('tailwindcss'),
	  import('autoprefixer')
	],
  };