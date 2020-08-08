import React from "react";
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from "./QuotesDatabase";
import "./App.css";
import ReactFCCtest from "react-fcctest";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes);
  };

  shareTweet = () => {
    var quoteToTweet = this.quote;
    if (quoteToTweet.length > 100) {
      quoteToTweet = quoteToTweet.substr(0, 100).match(/(^.+)\s/)[1] + "...";
    }
    quoteToTweet = encodeURI('"' + quoteToTweet + '"');
    window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet);
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    return (
      <div>
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
        <ReactFCCtest />
      </div>
    );
  }
}

export default App;
