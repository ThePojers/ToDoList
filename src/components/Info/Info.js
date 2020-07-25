import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore';

class Info extends React.Component {
  
  render (){

    return (
      <Container>
        <Hero titleText={info.title} image={info.image} />
        <p>{info.content}</p>
      </Container>
    );
  }
}



export default Info;