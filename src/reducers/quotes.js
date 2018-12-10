export default (state = [], action) => {

  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(obj => obj !== action.quote)
    case "UPVOTE_QUOTE":
      let idx = [...state].findIndex(obj => obj.id === action.quoteId)
      let newArr = [...state]
      newArr[idx].votes += 1
      return newArr
    case "DOWNVOTE_QUOTE":
      let idx2 = [...state].findIndex(obj => obj.id === action.quoteId)
      let newArr2 = [...state]
      if (newArr2[idx2].votes > 0) {
        newArr2[idx2].votes -= 1
      }
      return newArr2
    default:
      return state;
  }
}
