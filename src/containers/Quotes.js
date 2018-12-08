import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from "../actions/quotes"


class Quotes extends Component {

  render() {
    console.log(this.props)
      let allQuotes = this.props.quotes.map((quote, index) => {
        return (<QuoteCard
          key={quote.id}
          upvote={this.props.upvoteQuote}
          downvote={this.props.downvoteQuote}
          removeQuote={this.props.removeQuote}
          quote={quote}
          />)}
        )

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
              {allQuotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
