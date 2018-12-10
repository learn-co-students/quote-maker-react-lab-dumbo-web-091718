export const addQuote =(quoteObj)=> {
  return ({
    type: 'ADD_QUOTE',
    quote: quoteObj
  })
}

export const removeQuote = quoteObj => {
  return ({
    type: 'REMOVE_QUOTE',
    quote: quoteObj
  })
}

export const upvoteQuote = id => {
  return ({
    type: 'UPVOTE_QUOTE',
    quote: id
  })
}

export const downvoteQuote = id => {
  return ({
    type: 'DOWNVOTE_QUOTE',
    quote: id
  })
}
