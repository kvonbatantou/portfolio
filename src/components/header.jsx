import './header.css'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

function Header() {

  return (
   <header >
        <nav className="parent1">
            <div className="profil">
                <User className='icon' />
                <Link className='h1' to="/">Bless</Link>
            </div>
            <ul>
                <li><Link to="/about">A propos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/projets">Projets</Link></li>
            </ul>
        </nav>    
   </header>
  )
}

export default Header