import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import { Link } from 'react-router-dom';
import './styles.css'




function NavBar(){
    return (
    <header>
        <nav className="container">
          <div className='dsmovie-nav-content'>
            <Link to="/">
              <button className='buttonMain'>DSMovie</button>
            </Link>
            <a href="https://github.com/leovd100">
              <div className='dsmovie-contact-container'>
                <GitHubIcon />
                <p className='dsmovie-contact-link'>/Leonardo Demetrio</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;
