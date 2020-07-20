import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData} from '../../data/dataStore';

class Info extends React.Component {
  
  render (){

    return (
      <Container>
        <Hero titleText={listData.title} image={listData.image} />
        <p>Lorem ips23123134123423121242343124344123241321um dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Container>
    );
  }
}



export default Info;