import { Rnd } from "react-rnd"
import "./windows.scss"
const MacWindows = ({children}) => {
  return (
    <Rnd>
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title"><p>kshitijhimanshu - zsh</p></div>
            </div>
            <div className="main-content">
                {children}
            </div>

        </div>
    </Rnd>
  )
}

export default MacWindows
