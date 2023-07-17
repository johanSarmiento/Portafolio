/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"danger" : '#ff5f40',
				'estosisirve' : '#C231E8'
			}
		},
		fontFamily : {
			'principal' : ['Source Sans 3', 'sans-serif'],
		},
	},
	plugins: [],
}
