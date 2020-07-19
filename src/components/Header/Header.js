import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

const Header = () => (
    



  <header className={styles.component}>
    <Container>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to='/'>
          <Icon name='address-book'>
          </Icon>
        </Link>
        <nav>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/info'>Info</NavLink> 
        </nav>
      </div> 
    </Container>
  </header>
    
);


export default Header;