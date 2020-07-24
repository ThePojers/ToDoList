import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData} from '../../data/dataStore';


class Faq extends React.Component {
  
  render (){
    return (
      <Container>
        <Hero titleText={listData.faq.title} image={listData.faq.image} />
        <p>{listData.faq.content}</p>
      </Container>
    );
  }
}



export default Faq;