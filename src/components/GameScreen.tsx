import BottomBar from "./BottomBar"
import MiddleSection from "./MiddleSection"
import TopBar from "./TopBar"
import '../styles/GameScreen.css'

const GameScreen = () => {
  return (
    <div className="game-screen">
      <div className="container">
        <TopBar />
        <MiddleSection />
        <BottomBar />
      </div>
    </div>
  )
}

export default GameScreen
