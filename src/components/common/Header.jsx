import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import logo from "../../assets/mainlogo.jpg"

const AppHeader = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='container'>
      <div className='topBar'>
        <div className='contactInfo'>
          <ul>
            <li>
              <a href='mailto:mulireuben57@gmail.com'>
                <span>
                  <MdEmail style={{ marginRight: '8px' }} />
                  mulireuben57@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className='otherInfo'>
          <ul className='socialMedia'>
            <li>
              <a href='https://t.me/yourusername' target='_blank'>
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com' target='_blank'>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com' target='_blank'>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='header separator'>
        <div className='logo'>
          
       
        <img src={logo} alt="Leandro Bet Logo" className='logo-img' />
        <span className='logo-text'>Leandro Bet Official</span>
      
        </div>
       
        <div className='mobileVisibility'>
          <Button type='primary' onClick={() => setOpen(true)}>
            <MenuOutlined />
          </Button>
          <Drawer title='Basic Drawer' onClose={onClose} open={open}>
            <nav>
              <ul>
                <li>
                  <NavLink onClick={onClose} to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to='/about'>About Us</NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to='/wins'>Wins</NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to='/services'>Services</NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to='/Chatme'>Chat Me</NavLink>
                </li>
              </ul>
            </nav>
          </Drawer>
        </div>
        <nav className='mobileHidden'>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About Us</NavLink></li>
            <li><NavLink to='/wins'>Wins</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/Chatme'>Chat Me</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
