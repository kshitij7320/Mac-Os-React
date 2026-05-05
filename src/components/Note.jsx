import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import MacWindows from "./Windows/MacWindows"
import "./note.scss"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const Note = () => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(()=>{
        fetch("/note.txt")
        .then(res => res.text())
        .then(text => setMarkdown(text))
    },[])

  return (
    <MacWindows>
         <div className="note-window">
            {markdown ? <SyntaxHighlighter language="Typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading....</p>}
         </div>
    </MacWindows>
  )
}

export default Note
