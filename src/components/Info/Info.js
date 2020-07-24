import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData} from '../../data/dataStore';

class Info extends React.Component {
  
  render (){

    return (
      <Container>
        <Hero titleText={listData.info.title} image={listData.info.image} />
        <p>{listData.info.content}</p>
      </Container>
    );
  }
}



export default Info;