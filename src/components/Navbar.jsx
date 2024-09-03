import { FaUser, FaHeart } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MOVIPY</div>
      <div className="nav-items">
        <FaHeart className="icon" onClick={() => window.location.href = '/favorite'} />
        <FaUser className="icon" onClick={() => window.open('https://linkedin.com/in/portodit', '_blank')} />
      </div>
    </nav>
  );
}

export default Navbar;
