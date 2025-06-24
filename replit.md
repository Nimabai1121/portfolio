# Portfolio Website Project

## Overview

This is a modern, responsive portfolio website built with React, Express.js, and TypeScript. The application features a clean, professional design with dark/light theme support, smooth animations, and a contact form with backend integration. It showcases personal information, experience, projects, and skills in an elegant single-page layout.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds
- **Theme System**: Custom dark/light theme implementation with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server-side bundling

### Database & Storage
- **ORM**: Drizzle ORM with PostgreSQL support
- **Database**: PostgreSQL (Neon Database) - Production ready
- **Storage**: DatabaseStorage implementation for persistent data
- **Schema**: Type-safe database schemas with Zod validation
- **Tables**: users, contact_messages with automatic timestamps

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling and mobile menu
- **Hero Section**: Eye-catching introduction with social links and animated elements
- **About Section**: Personal background and education information
- **Experience Section**: Timeline-based experience showcase
- **Projects Section**: Portfolio projects with technology stack and links
- **Skills Section**: Technical skills with progress indicators
- **Contact Section**: Functional contact form with real-time validation

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database persistence
- **Validation**: Zod-based request validation with comprehensive error handling
- **Development Server**: Vite integration for hot module replacement

### UI/UX Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Animations**: Smooth scroll, fade-in effects, and interactive hover states
- **Performance**: Lazy loading, optimized images, and efficient re-renders

## Data Flow

### Contact Form Submission
1. User fills out contact form in the frontend
2. Form data is validated client-side using Zod schemas
3. Data is submitted to `/api/contact` endpoint via POST request
4. Backend validates data using shared Zod schemas
5. Contact message is stored in database/memory storage
6. Success/error response is returned to frontend
7. User receives feedback via toast notifications

### Theme Management
1. Theme preference is detected from system settings or localStorage
2. Theme state is managed through React Context
3. CSS variables are updated dynamically based on theme
4. Theme preference is persisted in localStorage

## External Dependencies

### Frontend Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/react-***: Headless UI components for accessibility
- **class-variance-authority**: Type-safe CSS class variants
- **clsx**: Utility for conditional CSS classes
- **tailwind-merge**: Tailwind CSS class merging utility
- **lucide-react**: Modern icon library
- **wouter**: Lightweight routing library

### Backend Dependencies
- **express**: Web framework for Node.js
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **zod**: Runtime type validation
- **tsx**: TypeScript execution for development

### Development Dependencies
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Development Environment
- **Local Development**: npm run dev starts both frontend and backend
- **Hot Reload**: Vite provides instant feedback for frontend changes
- **Database**: Uses in-memory storage for development simplicity
- **Port Configuration**: Frontend proxy to backend on port 5000

### Production Build
- **Frontend Build**: Vite builds optimized static assets
- **Backend Build**: esbuild bundles server code for production
- **Static Serving**: Express serves built frontend assets
- **Database**: PostgreSQL connection via environment variables

### Replit Deployment
- **Autoscale Deployment**: Configured for automatic scaling
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Port Configuration**: External port 80 mapped to internal port 5000
- **Build Process**: npm run build for production assets

## Changelog

```
Changelog:
- June 24, 2025. Initial setup with React frontend and Express backend
- June 24, 2025. Added PostgreSQL database integration with Drizzle ORM
- June 24, 2025. Migrated from in-memory storage to persistent database storage
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```