# React Jobs

A modern job listing application built with React, TypeScript, and Vite. This application allows users to browse, add, edit, and delete job listings with a clean and responsive UI.

## Features

- **Browse Job Listings**: View all available job postings with details
- **Job Details**: See comprehensive information about each job including company info, salary, and contact details
- **Add New Jobs**: Create new job listings with a user-friendly form
- **Edit Jobs**: Update existing job postings
- **Delete Jobs**: Remove job listings with confirmation
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Toast Notifications**: User feedback for actions using react-toastify
- **Loading States**: Smooth loading indicators with react-spinners

## Tech Stack

- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Vite 7.2** - Build tool and dev server
- **React Router DOM 7.9** - Client-side routing
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **JSON Server** - Mock REST API for development
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **React Spinners** - Loading indicators

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.tsx
│   ├── Hero.tsx
│   ├── HomeCards.tsx
│   ├── JobListing.tsx
│   ├── JobListings.tsx
│   ├── Navbar.tsx
│   ├── Spinner.tsx
│   └── ViewAllJobs.tsx
├── layouts/            # Layout components
│   └── MainLayout.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── JobsPage.tsx
│   ├── JobPage.tsx
│   ├── AddJobPage.tsx
│   ├── EditJobPage.tsx
│   └── NotFoundPage.tsx
├── loaders/            # React Router loaders
│   └── jobLoader.ts
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles and Tailwind config
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reactJobs
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

### Running the Application

The application requires two servers to run:

1. **Start the JSON Server** (mock API on port 9000):
```bash
npm run server
```

2. **Start the Development Server** (in a separate terminal):
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run server` - Start JSON Server on port 9000

## API Routes

The application uses Vite's proxy feature to forward `/api` requests to the JSON Server:

- `GET /api/jobs` - Fetch all jobs
- `GET /api/jobs/:id` - Fetch a single job
- `POST /api/jobs` - Create a new job
- `PUT /api/jobs/:id` - Update an existing job
- `DELETE /api/jobs/:id` - Delete a job

## Tailwind CSS Configuration

This project uses Tailwind CSS v4 with custom configuration:

- Custom font family: Roboto
- Custom grid layout: 70/30 split for desktop layout
- Configuration in [tailwind.config.js](tailwind.config.js)
- Theme customizations in [src/index.css](src/index.css)

## Routing

The application uses React Router v7 with the following routes:

- `/` - Home page
- `/jobs` - All jobs page
- `/jobs/:id` - Individual job details
- `/add-job` - Add new job form
- `/edit-job/:id` - Edit job form
- `*` - 404 Not Found page

## Job Data Structure

```typescript
type JobFormData = {
  id?: string;
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
};
```

## Development Notes

- The project uses TypeScript for type safety
- ESLint is configured for code quality
- The app uses React Router's data loading pattern with loaders
- Form submissions include toast notifications for user feedback
- Delete operations include confirmation prompts

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## License

This project was created as a learning exercise for React development.
