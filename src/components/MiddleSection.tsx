import '../styles/MiddleSection.css'
import { CreditNum } from './CreditNum'

const MiddleSection = () => {
  return (
    <>
      <div className="credits">
        <div className="credits-top">
          <h3>credits</h3>
        </div>
        <div className="credits-bottom">
          <CreditNum number='1,235,954'/>
          <img src="./middle/el.svg" alt="" />
        </div>
      </div>
      <div className="control">
        <img src="./middle/stick.png" alt="" />
      </div>
      <div className="atack">
        <img src="./middle/atack.svg" alt="" />
      </div>
      <div className="hand">
        <img src="./middle/hand.png" alt="" />
        <div className="aim">
          <img src="./middle/aim.png" alt="" />
        </div>
      </div>
      <div className="bot">
        <img src="./middle/bot.png" alt="" />
      </div>
    </>
  )
}

export default MiddleSection
