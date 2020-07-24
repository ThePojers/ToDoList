import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch, createActionAddCard} from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.id),
});
console.log();
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);