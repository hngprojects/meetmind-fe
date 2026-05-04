# Meetmind Frontend

The frontend for Meetmind, built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Core**: React 19, TypeScript 6
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Icons**: Lucide React
- **Code Quality**:
  - **ESLint**: Custom configuration with Prettier integration.
  - **Prettier**: Consistent code formatting.
  - **Husky & lint-staged**: Automated checks on commit.
  - **Commitlint**: Conventional commit enforcement.

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Run the development server:

```bash
pnpm dev
```

### Build

Build for production:

```bash
pnpm build
```

## Project Structure

- `src/components`: Reusable UI components.
- `src/components/ui`: shadcn/ui components.
- `src/lib`: Utility functions.
- `public/assets/fonts`: Local fonts.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License.
