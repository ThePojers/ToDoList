cimport shortid from 'shortid';

// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE_CARD = createActionName('CHANGE_CARD');
// action creators
export const createAction_changeSearchString = payload => ({ payload: { ...payload, id: shortid.generate() }, type: CHANGE_CARD });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}

