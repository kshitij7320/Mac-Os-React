import Dock from "./components/Dock"
import Nav from "./components/Nav"
import Note from "./components/Note"
import Github from "./components/Windows/Github"
import Resume from "./components/Windows/Resume"
import Spotify from "./components/Windows/Spotify"

const App = () => {
  return (
    <main>
      <Nav />
      
      <Dock />
      <Github />
      <Note />
      <Resume/>
      <Spotify/>
    </main>
  )
}

export default App
