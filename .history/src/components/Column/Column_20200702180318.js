import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {


  static propTypes = {
    title: PropTypes.string.isRequired,
    
  }

  render() {
    const { title, icon} = this.props;
    return (
      
      <section className={styles.component}>
        <h2 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}></Icon></span>{this.props.title}</h2>
        <div>
          {//{this.state.cards.map(({key, ...cardsProps}) => (
           // <Card key={key} {...cardsProps} />
  }
          ))}
        </div>
        <div className={styles.creator}>
          {//<Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          }
        </div>
      </section>
    );
  }
}

export default Column;
