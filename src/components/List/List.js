import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';
import Column from '../Column/Column';


class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    source: PropTypes.string.isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>LalaBongo</h2>
        <Hero titleText={[this.props.title]} source={this.props.source} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title="hehe"></Column>
          <Column title="uhuh"></Column>
          <Column title="warara"></Column>
        </div>
      </section>
    )
  }
}

export default List;
