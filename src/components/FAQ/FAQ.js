import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

class Faq extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
  }

  render (){
    console.log(this.props);
    const {title, image} = this.props;
   
    return (
      <Container>
        <Hero titleText={title} image={image} />
        <h2>Info</h2>
        <p>Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Container>
    );
  }
}



export default Faq;