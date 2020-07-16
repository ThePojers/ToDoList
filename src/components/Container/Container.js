import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';




const Hero = props => (
  <div className={styles.component}>
    {props.children}
  </div>
);
Hero.propTypes = {
  children: PropTypes.node,
};
export default Hero;