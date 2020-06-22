import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    source: PropTypes.string.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>LalaBongo</h2>
        <Hero titleText={[this.props.title]} source={this.props.image} />
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          <Column title='hehe'></Column>
          <Column title="uhuh"></Column>
          <Column title="warara"></Column>
        </div>
      </section>
    )
  }
}

export default List;
