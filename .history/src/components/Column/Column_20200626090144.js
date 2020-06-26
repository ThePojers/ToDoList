import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card'
import Creator from '../Creator/Creator'
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon'

class Column extends React.Component {

  state = {
    cards: this.props.cards || ,
  }


  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    cards: PropTypes.node,
  }

  addCard(title) {

    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          }
        ]
      }
    ));
  }

  render() {
    // console.log(this.state.cards)
    return (

      <section className={styles.component}>
        <h2 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}></Icon></span>{this.props.title}</h2>
        <div>
          {this.state.cards.map(({ key, ...cardsProps }) => (
            <Card key={key} {...cardsProps} />

          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    )
  }
}

export default Column;
