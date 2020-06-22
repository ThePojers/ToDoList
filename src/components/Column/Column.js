import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import List from '../List/List.js'

class Column extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <section className={styles.component}>
          <h2 className={styles.title}>{this.props.title}</h2>
      </section>
    )
  }
}

export default Column;
