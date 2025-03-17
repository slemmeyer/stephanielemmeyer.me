/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-base-content)',
            h1: {
              color: 'var(--color-primary)',
            },
            h2: {
              color: 'var(--color-primary)',
            },
            h3: {
              color: 'var(--color-primary)',
            },
            strong: {
              color: 'var(--color-primary)',
            },
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-secondary)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", {
      coolcat: {
        "primary": "oklch(27.95% 0.0368 260.03)",
        "primary-content": "oklch(100% 0 0)",
        "secondary": "oklch(71.07% 0.0351 256.79)",
        "secondary-content": "oklch(27.95% 0.0368 260.03)",
        "accent": "oklch(90.14% 0.0555 230.9)",
        "accent-content": "oklch(20.77% 0.0398 265.75)",
        "neutral": "oklch(55.44% 0.0407 257.42)",
        "neutral-content": "oklch(100% 0 0)",
        "base-100": "oklch(98.42% 0.0034 247.86)",
        "base-200": "oklch(96.83% 0.0069 247.9)",
        "base-300": "oklch(92.88% 0.0126 255.51)",
        "base-content": "oklch(37.17% 0.0392 257.29)",
        "info": "oklch(71.37% 0.1434 254.62)",
        "info-content": "oklch(39.12% 0.0845 240.88)",
        "success": "oklch(77.29% 0.1535 163.22)",
        "success-content": "oklch(100% 0 0)",
        "warning": "oklch(83.69% 0.1644 84.43)",
        "warning-content": "oklch(100% 0 0)",
        "error": "oklch(71.06% 0.1661 22.22)",
        "error-content": "oklch(100% 0 0)",
      }
    }],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}