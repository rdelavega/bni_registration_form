# BNI Registration Form - Yucatán

A modern, responsive web application for managing BNI (Business Network International) membership registrations in the Yucatán chapter. This form allows both guest registrations (invitados) and membership renewals (renovación).

## Features

- **Dual Registration Modes**
  - Guest Registration (Invitado) - For new attendees
  - Membership Renewal (Renovación) - For existing members

- **Modern UI Design**
  - Responsive design optimized for desktop and mobile devices
  - Tailwind CSS for professional styling
  - Smooth transitions and hover effects
  - Loading states and error handling

- **Form Functionality**
  - Validates all required fields before submission
  - Collects: First name, Last name, Email, Phone, Industry, Chapter, Period
  - Real-time form data management
  - Toast notifications for successful submissions
  - Bug reporting modal for user support

- **Backend Integration**
  - Configurable API endpoints via environment variables
  - Separate endpoints for guest and renewal submissions
  - Error handling and user feedback

## Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 4 with Vite plugin
- **Build Tool**: Vite 7
- **Icons**: React Icons
- **Code Quality**: ESLint
- **Node.js**: Module-based ES6+

## Prerequisites

- Node.js 18+
- npm or yarn

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bni_registration_form
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with your API endpoint:

```env
VITE_API_URL=https://your-api-endpoint.com
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm lint
```

## Project Structure

```
bni_registration_form/
├── src/
│   ├── components/
│   │   ├── BNIForm.jsx              # Main registration form with API integration
│   │   ├── RegistroBNI.jsx          # Registration type selector logic
│   │   ├── SelectRegisterType.jsx   # UI for selecting registration type
│   │   ├── BugReportModal.jsx       # Bug reporting feature
│   │   └── Spinner.jsx              # Loading indicator component
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # App-specific styles
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── eslint.config.js                 # ESLint configuration
├── package.json                     # Project dependencies and scripts
└── index.html                       # HTML entry point
```

## Configuration

### Environment Variables

The following environment variables can be configured:

| Variable       | Description          | Example                   |
| -------------- | -------------------- | ------------------------- |
| `VITE_API_URL` | Backend API base URL | `https://api.example.com` |

### Tailwind CSS

Custom Tailwind configuration is available in `tailwind.config.js`. The project uses Tailwind CSS v4 with Vite plugin for optimal performance.

## Form Fields

The registration form collects the following information:

- **First Name** (Nombre) - Required
- **Last Name** (Apellido) - Required
- **Email** - Required
- **Phone** (Teléfono) - Required
- **Industry/Sector** (Giro) - Required
- **Chapter** (Capítulo) - Required
- **Period** (Período) - Required

## API Integration

### Guest Registration Endpoint

```
POST {VITE_API_URL}/invitado
```

### Membership Renewal Endpoint

```
POST {VITE_API_URL}/renovacion
```

Both endpoints expect the same request body format:

```json
{
  "firstname": "string",
  "lastname": "string",
  "email": "string",
  "phone": "string",
  "giro": "string",
  "capitulo": "string",
  "periodo": "string"
}
```

## Component Overview

- **SelectRegisterType**: Landing page with two registration option cards
- **BNIForm**: Main registration form with validation and submission logic
- **RegistroBNI**: State management and conditional rendering between registration types
- **BugReportModal**: Built-in bug reporting feature for users
- **Spinner**: Loading indicator component

## Responsive Design

The application is fully responsive with breakpoints for:

- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## Error Handling

- Form validation before submission
- Server error messages displayed to users
- Network error handling with user-friendly messages
- Toast notifications for successful submissions

## Deployment

To deploy this application:

1. Build the production bundle:

```bash
npm run build
```

2. The optimized files will be in the `dist/` directory

3. Deploy the `dist/` folder to your hosting service (Vercel, Netlify, etc.)

4. Configure the `VITE_API_URL` environment variable in your hosting platform
