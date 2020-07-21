import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, pageContents } from '../../data/dataStore';


class Faq extends React.Component {
  
  render (){
    return (
      <Container>
        <Hero titleText={listData.title} image={listData.image} />
        <p>{pageContents.content}</p>
      </Container>
    );
  }
}



export default Faq;