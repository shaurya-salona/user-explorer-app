# User Explorer App

A React application built with Vite that fetches and displays user data from the JSONPlaceholder API with search functionality.

## Features

- 📱 **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface
- 🔍 **Search Functionality**: Filter users by name in real-time
- 📊 **User Data Display**: Shows comprehensive user information including:
  - Personal details (name, email, phone, website)
  - Company information (name, catchphrase, business)
  - Address details
- ⚡ **Fast Loading**: Built with Vite for optimal performance
- 🎨 **Modern UI**: Clean, card-based layout with hover effects

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## Project Structure

```
src/
├── components/
│   ├── UserCard.jsx      # Individual user card component
│   └── UserList.jsx      # List of user cards
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-explorer-app.git
cd user-explorer-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API

This application fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), which provides fake user data for testing and prototyping.

## Component Architecture

The application follows a prop drilling pattern:

1. **App.jsx** - Manages state (users, loading, error, search) and fetches data
2. **UserList.jsx** - Receives filtered users and renders them in a grid
3. **UserCard.jsx** - Displays individual user information

## Features in Detail

### State Management
- `users`: Array of user objects from the API
- `loading`: Boolean indicating if data is being fetched
- `error`: String containing error message if fetch fails
- `searchQuery`: String for filtering users by name

### Conditional Rendering
- Loading state: Shows "Loading users..." message
- Error state: Shows error message with retry suggestion
- Empty search: Shows "No users match your search" when no results found
- Success state: Displays filtered user cards

### Search Functionality
- Real-time filtering as user types
- Case-insensitive search
- Filters by user name only

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
