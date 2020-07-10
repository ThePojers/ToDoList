import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  render() {
    const { title, icon, cards, addCard} = this.props;
    console.log(addCard);
    return (
      
      <section className={styles.component}>
        <h2 className={styles.title}><span className={styles.icon}><Icon name={icon}></Icon></span>{title}</h2>
        <div>
          {console.log(cards)}

          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;
