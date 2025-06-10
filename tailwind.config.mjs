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
            p: {
              marginTop: '1em',
              marginBottom: '1em',
            },
            ul: {
              marginTop: '1em',
              marginBottom: '1em',
              paddingLeft: '1.25em',
              listStyleType: 'disc',
            },
            li: {
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
            h1: {
              color: '#1E293B',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h2: {
              color: '#1E293B',
              marginTop: '1.25em',
              marginBottom: '0.5em',
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