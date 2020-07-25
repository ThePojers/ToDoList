import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore';


class Faq extends React.Component {
  
  render (){
    return (
      <Container>
        <Hero titleText={faq.title} image={faq.image} />
        <p>{faq.content}</p>
      </Container>
    );
  }
}



export default Faq;