import MacWindows from "./MacWindows"
import "./resume.scss"


const Resume = () => {
  return (
    <MacWindows>
      <div className="resume-window">
        <iframe src="/resume.pdf"></iframe>
      </div>
    </MacWindows>
  )
}

export default Resume
