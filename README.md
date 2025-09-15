# RHZ & Intiqal Register Management System

A modern React application for managing RHZ (Revenue and Housing Zone) and Intiqal registers with interactive mapping capabilities.

## 🚀 Features

- **Interactive Map Interface**: Built with Leaflet for geographical data visualization
- **Form Management**: Comprehensive dropdown-based form system for District, Tehsil, and Mouza selection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Error Handling**: Robust error boundaries and loading states
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Leaflet** - Interactive maps
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── utils/           # Utility components (Button, Dropdown)
│   ├── Hero.tsx         # Hero section component
│   ├── header.tsx       # Navigation header
│   ├── footer.tsx       # Footer component
│   ├── map.tsx          # Interactive map component
│   └── ErrorBoundary.tsx # Error handling component
├── pages/               # Route components
│   ├── Home.tsx         # Landing page
│   └── Registers.tsx    # Register management page
├── hooks/               # Custom React hooks
│   └── useRegisterForm.ts # Form state management
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared interfaces
├── shared/              # Shared data and utilities
│   └── static.data.ts   # Static data (districts, tehsils, etc.)
└── App.tsx              # Main application component
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build directory

## 🗺️ Map Integration

The application uses Leaflet for interactive mapping:

- Satellite imagery from Esri
- Error handling for network issues
- Responsive map sizing
- Accessibility support

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Optimized for various screen sizes

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all new components
- Follow existing naming conventions
- Implement proper error handling
- Add accessibility attributes where needed

### Component Structure

```typescript
interface ComponentProps {
  // Define all props with proper types
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Component implementation
}
```

### State Management

- Use custom hooks for complex state logic
- Implement proper form validation
- Handle loading and error states

## 🚀 Deployment

1. Build the application:

   ```bash
   npm run build
   ```

2. The `dist` folder contains the production build
3. Deploy the contents to your preferred hosting service

## 📄 License

This project is licensed under the MIT License.
