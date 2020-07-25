import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch, createActionAddCard} from '../../redux/cardsRedux';
import {
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';
import {searchContent} from '../../data/dataStore';


const mapStateToProps = (state, props) => ({
  title: searchContent.title,
  phrase: props.match.params.phrase,
  cards: getCardsForSearch(state, props.id),
  
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
 
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);