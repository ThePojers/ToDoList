// selectors
export const getSearchString = ({state}) => c;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.length.filter(card => new RegExp(searchString, 'i').test(card.title));
// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

