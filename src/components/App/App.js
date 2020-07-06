import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/List.js';



class App extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
<<<<<<< HEAD
    const {title, subtitle, image, description} = this.props;
=======
    const {title, subtitle, image, description, lists} = this.props;
>>>>>>> 67de05916b2db572bad9d4e752938f9cde6d9f70
    return (
      
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
          
        ))}
       
      </main>
    );
  }
}

export default App;
