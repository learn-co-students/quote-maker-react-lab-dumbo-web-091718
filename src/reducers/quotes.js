export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      // console.log(action.quote)
      return state.concat(action.quote)

    case "REMOVE_QUOTE":
      let filteredQuotes = state.filter(quote => quote.id !== action.quoteId)
      return filteredQuotes

    case "UPVOTE_QUOTE":
      state.forEach(quote => {
        if (quote.id === action.quoteId){
          quote.votes = quote.votes += 1
        }
      })

      return state

    case "DOWNVOTE_QUOTE":
      state.forEach(quote => {
        if (quote.id === action.quoteId && quote.votes > 0){
          quote.votes = quote.votes -= 1
        }
      })

    return state

    default:
      return state;
  }
}
