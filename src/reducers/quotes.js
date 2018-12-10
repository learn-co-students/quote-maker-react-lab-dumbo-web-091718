export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
    
      case "REMOVE_QUOTE":
      console.log('action', action);
      const newState = state.filter(quote => quote.quoteId !== action.quoteId )
      console.log('newww state', newState);
      return [...newState];
  
      case "UPVOTE_QUOTE":
        const quoteToUpdate = state.find(quote => quote.quoteId == action.quoteId)
        quoteToUpdate.votes += 1;
        console.log('yoooooo stateeeee', state)
        return [...state]
    
      case "DOWNVOTE_QUOTE":
        const quoteToDownvote = state.find(quote => quote.quoteId == action.quoteId)
        quoteToDownvote.votes -=1;
        return [...state]

    default:
      return state;
  }
}
