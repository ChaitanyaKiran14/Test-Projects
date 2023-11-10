import {Link} from 'react-router-dom'

import './index.css'


const Header  = () => {
    return(
        <nav className="navbar">
        <div className="navbar-logo">
            <a href="#">Stark</a>
        </div>
        <ul class="navbar-menu">
        <li className="nav-menu-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-menu-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-menu-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            
        </ul>
        </nav>
    )
}
export default Header