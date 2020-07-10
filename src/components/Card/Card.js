import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
    

    static propTypes = {
      title: PropTypes.string.isRequired,
    }
  
    render() {
      // console.log(this.props)
      const { title } = this.props;
      return (
        <section className={styles.component}>
          <h1>{ title }</h1>
        </section>
      );
    }
}
  
export default Column;