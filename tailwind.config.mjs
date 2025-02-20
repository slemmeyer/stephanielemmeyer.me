/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',    // Deeper blue-gray
        secondary: '#94A3B8',  // Softer blue-gray
        accent: '#BAE6FD',     // Light sky blue
        background: '#F8FAFC', // Very light blue-gray
        text: '#334155'        // Medium blue-gray
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            h1: {
              color: '#1E293B',
            },
            h2: {
              color: '#1E293B',
            },
            h3: {
              color: '#1E293B',
            },
            strong: {
              color: '#1E293B',
            },
            a: {
              color: '#1E293B',
              '&:hover': {
                color: '#94A3B8',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}