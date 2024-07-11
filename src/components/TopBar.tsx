import { Link } from 'react-router-dom'
import '../styles/TopBar.css'

const TopBar = () => {
  return (
    <div className='nav'>
      <div className="nav-left">
        <Link to={'/home'}>
          <img className='icon' src="./top/home.svg" alt="" />
        </Link>
        <span className='link' >домой</span>
      </div>
      <div className="nav-right">
        <Link to={'/menu'}>
          <img className='icon' src="./top/menu.svg" alt="" />
        </Link>
        <span className="link">МЕНЮ</span>
      </div>
    </div>
  )
}

export default TopBar
