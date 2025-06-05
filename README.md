# VG Library 🎮

A modern, responsive game discovery application built with React and powered by the RAWG.io API. Explore thousands of games with advanced filtering options and detailed game information.

## ✨ Features

- **Game Explorer**: Browse through an extensive library of games with intuitive filtering
- **Advanced Filtering**: Filter games by genre, platform, release date, rating, and more
- **Detailed Game Pages**: Comprehensive game information including screenshots, descriptions, ratings, and metadata
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing
- **Search Functionality**: Quick search to find specific games
- **Toast Notifications**: User-friendly feedback for actions and errors
- **Fast Performance**: Built with Vite for lightning-fast development and build times

## 🚀 Live Demo

Visit the live application: []

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **API**: RAWG.io Game Database API
- **Icons**: React Icons
- **Theming**: next-themes
- **Notifications**: React Hot Toast
- **Select Components**: React Select
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd game-browser
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_RAWG_API_KEY=your_rawg_api_key_here
   VITE_API_BASE_URL=https://api.rawg.io/api
   ```

4. **Get your RAWG.io API key**

   - Visit [RAWG.io API](https://rawg.io/apidocs)
   - Register for a free account
   - Generate your API key
   - Add it to your `.env` file

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎮 Usage

### Game Explorer

- Browse games on the main page
- Use filters to narrow down results by:
  - Genre (Action, Adventure, RPG, etc.)
  - Platform (PC, PlayStation, Xbox, etc.)
  - Release Date
  - Rating
  - Developer/Publisher
- Click on any game card to view detailed information

### Game Details

- View comprehensive game information
- See screenshots and trailers
- Check ratings and reviews
- View system requirements
- Explore similar games

### Theme Toggle

- Switch between dark and light modes using the theme toggle
- Preference is saved locally

## 📁 Project Structure

```
vg-library/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DarkModeSwitch.jsx
│   │   └── navbar.jsx
│   ├── GamePage/
│   │   ├── GamePage.jsx
│   │   └── Images.jsx
│   ├── hooks/
│   │   ├── useElement.js
│   │   ├── useGames.js
│   │   ├── useGenre.js
│   │   └── usePlatform.js
│   ├── Pages/
│   │   ├── CriticScore.jsx
│   │   ├── Exp.jsx
│   │   ├── GameGrid.jsx
│   │   ├── Gcards.jsx
│   │   ├── GcardSkeleton.jsx
│   │   ├── Genres.jsx
│   │   ├── Home.jsx
│   │   ├── Platicons.jsx
│   │   └── PlatSelect.jsx
│   ├── services/
│   │   ├── apiClient.js
│   │   └── imageUrl.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── theme.js
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 API Integration

This project uses the RAWG.io API to fetch game data. Key endpoints used:

- `/games` - Get list of games with filtering options
- `/games/{slugGame}` - Get detailed game information
- `/genres` - Get available game genres
- `/platforms` - Get gaming platforms

## 🎨 Styling

The project uses Tailwind CSS for styling with:

- Responsive design principles
- Dark/light theme support
- Custom component styling
- Utility-first approach
- Mobile-first responsive design

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Environment Variables

Required environment variables:

| Variable            | Description          | Required |
| ------------------- | -------------------- | -------- |
| `VITE_RAWG_API_KEY` | Your RAWG.io API key | Yes      |
| `VITE_API_BASE_URL` | RAWG.io API base URL | Yes      |

## 🚀 Deployment

### Vercel Deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [RAWG.io](https://rawg.io/) for providing the comprehensive game database API
- [React](https://reactjs.org/) for the awesome frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Vercel](https://vercel.com/) for seamless deployment

---

Made with ❤️ by [TNMT]
