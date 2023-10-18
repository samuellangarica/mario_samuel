import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const [openMenu,setOpenMenu ] = useState(1);
  function handleClick(){
    setOpenMenu(!openMenu);
  }
  return (
    <div className={'navbar' + (openMenu ? ' opened' : '')}>

      
      <div className='desktop'>

        <Link className='link' to="/">
            Home
        </Link>

        <Link className='link' to="/our-projects">
            Our Projects
        </Link>

        <Link className='link' to="/about-us">
            About Us
        </Link>

      </div>
        

      <div className='mobile'>

        <MenuIcon id={'ham-icon'} onClick={handleClick}>

        </MenuIcon>

        <div className='btns'>
        <Link className='link' to="/" onClick={handleClick}>
              Home
          </Link>

          <Link className='link' to="/our-projects" onClick={handleClick}>
              Our Projects
          </Link>

          <Link className='link' to="/about-us" onClick={handleClick}>
              About Us
          </Link>
        </div>

      </div>

    </div>
  );
    
    
};

export default Navbar;
