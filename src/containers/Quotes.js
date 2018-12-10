import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {

    const allTheQuotes = this.props.quotes.map(q => {
        return (
          <QuoteCard
          quote={q}
          upvote={this.props.upvoteQuote}
          downvote={this.props.downvoteQuote}
          remove={this.props.removeQuote}
          />
        )
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
              {allTheQuotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
