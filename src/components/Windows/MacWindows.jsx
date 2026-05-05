import { Rnd } from "react-rnd"
import "./windows.scss"
const MacWindows = ({children,width="40vw",height="40vh"}) => {
  return (
    <Rnd
    default={{
        width: width,
        height: height,
        x:300,
        y:200
    }}
    enableResizing={{
      top: true,
      right: true,
      bottom: true,
      left: true,
      topRight: true,
      bottomRight: true,
      bottomLeft: true,
      topLeft: true
    }}
    minWidth={300}
    minHeight={200}
    >
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
