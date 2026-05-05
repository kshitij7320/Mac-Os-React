import Dock from "./components/Dock"
import Nav from "./components/Nav"
import Note from "./components/Note"
import Github from "./components/Windows/Github"

const App = () => {
  return (
    <main>
      <Nav />
      
      <Dock />
      <Github />
      <Note />
    </main>
  )
}

export default App
