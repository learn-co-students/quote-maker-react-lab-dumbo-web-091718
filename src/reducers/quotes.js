export default (state = [], action) => {
  let selectedQuote;
  let index;
  let newArray;
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => action.quoteId === quote.id)
      selectedQuote = state[index]
      selectedQuote.votes = selectedQuote.votes + 1
      newArray = state.filter(quote => quote.id !== action.quoteId)
      return [...newArray, selectedQuote]

    case 'DOWNVOTE_QUOTE':
    index = state.findIndex(quote => action.quoteId === quote.id)
    selectedQuote = state[index]
    selectedQuote.votes > 0 ? selectedQuote.votes = selectedQuote.votes - 1 : null
    newArray = state.filter(quote => quote.id !== action.quoteId)
    return [...newArray, selectedQuote]

    default:
      return state;
  }
}
