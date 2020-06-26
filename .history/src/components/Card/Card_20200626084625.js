import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
    

    static propTypes = {
      title: PropTypes.node.isRequired,
    }
  
    render() {
        // console.log(this.props)
      return (
        <section className={styles.component}>
            <h1>{this.props.title}</h1>
        </section>
      )
    }
  }
  
  export default Column;