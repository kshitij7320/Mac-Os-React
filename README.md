# macOS Portfolio

A beautiful, interactive macOS-inspired portfolio website built with React and Vite. Showcasing projects, resume, notes, and more in a sleek desktop interface.

## ✨ Features

- **macOS-like Interface** — Draggable and resizable windows mimicking the macOS desktop experience
- **Real-time Clock** — Live date and time display in the top navigation
- **Interactive Dock** — Quick access to different sections (GitHub, Resume, Spotify, Notes, CLI)
- **Responsive Design** — Works seamlessly across different screen sizes
- **Hot Module Replacement (HMR)** — Fast refresh during development
- **SCSS Styling** — Modern and maintainable styling with SCSS

## 🛠️ Tech Stack

- **React** 19.2.5 — UI framework
- **Vite** 8.0.10 — Fast build tool and dev server
- **react-rnd** 10.5.3 — Draggable and resizable components
- **react-markdown** 10.1.0 — Markdown rendering
- **react-syntax-highlighter** 16.1.1 — Code syntax highlighting
- **SCSS** — CSS preprocessing
- **ESLint** — Code linting

## 📁 Project Structure

```
src/
├── components/
│   ├── Dock.jsx              # Main dock navigation
│   ├── DateTime.jsx          # Real-time date/time display
│   ├── Nav.jsx               # Navigation bar
│   ├── Windows/
│   │   ├── MacWindows.jsx    # Reusable window wrapper (draggable & resizable)
│   │   ├── Github.jsx        # GitHub projects window
│   │   ├── Note.jsx          # Notes window
│   │   ├── Resume.jsx        # Resume window
│   │   ├── Spotify.jsx       # Spotify window
│   │   └── Cli.jsx           # CLI/Terminal window
│   ├── dock.scss
│   ├── nav.scss
│   └── note.scss
├── assets/
│   └── github.json           # GitHub projects data
├── App.jsx                   # Main application component
├── app.scss                  # Global styles
└── main.jsx                  # React entry point

public/
├── doc-icons/                # Icon assets for dock items
├── navbar-icons/             # Icons for navbar
└── resume.pdf                # Resume PDF file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Macos
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` — Start development server with HMR
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## 🪟 Windows & Components

### Dock Icons

Click the dock icons to open different windows:

- **GitHub** — View your GitHub projects and repositories
- **Note** — Take and view notes
- **Resume** — Display your resume/CV
- **Spotify** — Show your favorite tracks
- **CLI** — Terminal-like command interface

### MacWindows Component

All windows use the `MacWindows` wrapper component which provides:
- **Dragging** — Click and drag window title bar to move
- **Resizing** — Drag edges and corners to resize
- **macOS-style Controls** — Close, minimize, and fullscreen buttons (red, yellow, green dots)
- **Responsive Content** — Flexible height and width configuration

## 🎨 Customization

### Changing Window Sizes

Edit the `width` and `height` props in components:
```jsx
<MacWindows width="50vw" height="60vh">
  {/* content */}
</MacWindows>
```

### Adding New Icons

Add SVG files to `public/doc-icons/` and update the Dock component:
```jsx
<div className="icon">
  <img src="/doc-icons/new-icon.svg" alt="New Icon" />
</div>
```

### Updating Portfolio Data

Edit `src/assets/github.json` to update project information.

## 📦 Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🔧 Development Notes

- Windows are created dynamically based on `windowsState` in App.jsx
- Real-time date/time updates every second using React hooks
- All windows use the `MacWindows` wrapper for consistent styling and behavior
- Use `setWindowsState` to toggle window visibility

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by Kshitij Himanshu

