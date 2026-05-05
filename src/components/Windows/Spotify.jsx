
import MacWindows from './MacWindows'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowsState }) => {
    return (
        <MacWindows width='25vw'  windowName={windowName} setWindowsState={setWindowsState} >
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
                 width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindows>
    )
}

export default Spotify