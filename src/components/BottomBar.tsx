import '../styles/BottomBar.css'
import Cap from './Cap'

const BottomBar = () => {
  const segments = Array.from({ length: 24}, (_, i) => i)

  return (
    <div className='bottom-bar'>
      <div className="weapon">
        <div className="weapon-info weapon-info-left">
          <div className="weapon-text">
            обойма:
          </div>
          <div className="weapon-num">1234</div>
        </div>
        <div className="weapon-main">
          <div className="weapon-bg">
            <img src="./bottom/top-weapon.png" alt="" />
          </div>
          <div className="weapon-bg">
            <img src="./bottom/bottom-weapon.png" alt="" />
          </div>
          <div className="weapon-image">
            <img src="./bottom/weapon.png" alt="" />
          </div>
        </div>
        <div className="weapon-info weapon-info-right">
          <div className="weapon-text">
            мощность:
          </div>
          <div className="weapon-num">1234</div>
        </div>
      </div>
      <div className="power">
        <Cap />
        <div className="power-stock">
          <img className='stock-image' src="./bottom/line-stock.svg" alt="" />
          {segments.map((_, i) => (
            <div
              key={i}
              className={`segment ${getSegmentClass(i)}`}
            ></div>
          ))}
          <div className="segment"></div>
        </div>
        <Cap className='cap-right' />
      </div>
    </div>
  )
}

const getSegmentClass = (index: number) => {
  if (index < 5) return 'red'
  if (index < 10) return 'orange';
  if (index < 15) return 'yellow';
  if (index < 20) return 'light-green';
  return 'green'
}

export default BottomBar
