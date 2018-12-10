import React from 'react';

const QuoteCard = (props) => {
  return (<div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote"><p>{props.q.content}</p>
          <footer>- author <cite title="Source Title">{props.q.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary" onClick={() => props.upvoteQuote(props.q.quoteId)}>
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary" onClick={() => props.downvoteQuote(props.q.quoteId)} >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger" onClick={() => props.removeQuote(props.q.quoteId)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <React.Fragment>Votes: {props.q.votes}</React.Fragment>
      </div>
    </div>
  </div>)
};

export default QuoteCard;
