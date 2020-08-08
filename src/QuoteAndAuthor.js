import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="text">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="new-quote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
        <br />
        <a
          class="btn btn-primary"
          href={"https://twitter.com/intent/tweet?text=" + this.props.quote}
          id="tweet-quote"
          target="_blank"
          role="button"
        >
          <i class="fa fa-twitter"></i> Tweet
        </a>
      </div>
    );
  }
}

export default QuoteAndAuthor;
