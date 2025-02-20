# stephanielemmeyer.me

Personal website for Stephanie Lemmeyer, built with Astro and Tailwind CSS.

## Tech Stack

- [Astro](https://astro.build/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Typography plugin for blog content

## Development

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm

### Setup

1. Clone the repository

```bash
git clone https://github.com/stephanielemmeyer/stephanielemmeyer.me.git
```

2. Install dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm run dev
```

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/ # Reusable Astro components
├── layouts/ # Page layouts
├── pages/ # Route pages
├── data/ # Data files
└── styles/ # Global styles
```

## License

MIT License
