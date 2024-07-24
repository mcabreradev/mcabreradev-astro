module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'custom-gray': '#1a1a1a', // Background color
        'custom-light-gray': '#333', // Lighter sections background
        'custom-text': '#fff', // Text color
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
	},
	plugins: [],
};
