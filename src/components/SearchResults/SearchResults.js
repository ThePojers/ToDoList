import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    changeSearchString: PropTypes.func,
    phrase: PropTypes.string,
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount ()  {
    const {phrase} = this.props;
    console.log(phrase);
    this.props.changeSearchString(phrase);
  }

  render() {
    const { title, icon, cards, phrase} = this.props;
    console.log(phrase);
    console.log(title);
 
    return (
      
      <section className={styles.component}>
        <h2 className={styles.title}><span className={styles.icon}><Icon name={icon}></Icon></span>{title}</h2>
        <div>
          

          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          
        </div>
      </section>
    );
  }
}

export default SearchResults;
