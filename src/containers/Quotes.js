import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes"
import { stat } from 'fs';

class Quotes extends Component {
  render() {
    console.log('all rpopsss',this.props )
    const quotes = this.props.quotes.map(q => {
      return <QuoteCard key={q.quoteId} q={q}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
        removeQuote={this.props.removeQuote}
      />
    })

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);