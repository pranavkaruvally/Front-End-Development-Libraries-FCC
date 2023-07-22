import './App.css';
import React from "react";
// import Clicker from './components/quote_box/Clicker.js';

function App() {
  const myQuote = "Life is what happens to you, While you're busy making other plans.";
  return (
    <div className="App">
      <Clicker id="#new-quote" color="#73A857" content="New quote"/><br/>
      <Clicker id="#tweet-quote" color="#73A857" content="a">a</Clicker><br/>
      <QuoteAuthor id="#author" color="#73A857" authorName="John Lennon" /><br/>
      <QuoteText quote={myQuote} color="#73A857"/>
    </div>
  );
}

export default App;

class Clicker extends React.Component {
  Clicker(props) {
      this.super(props);
  }
  render() {
      const buttonStyle = {
          "color": "white",
          "background-color": this.props.color,
          "border": "none",
          "border-radius": "3px",
          "font": "0.85em Arial",
          "height": "38px",
          "margin": "30px 0px 0px 0px",
          "padding": "8px 18px 6px 18px",
          "cursor": "pointer",
      }
      return <button style={buttonStyle}>{ this.props.content }</button>;
  }
}

class QuoteAuthor extends React.Component {
  QuoteAuthor(props) {
    this.super(props);
  }

  render() {
    const authorStyle = {
      "color": this.props.color,
      "font": "16px Raleway, sans-serif",
    };
    return <p style={authorStyle}> - {this.props.authorName}</p>
  }
}

class QuoteText extends React.Component {
  Quote(props) {
    this.super(props);
  }

  render() {
    const divStyle = {
      "text-align": "center",
      "width": "450px",
      "height": "auto",
      "clear": "both",
    };
    const textStyle = {
      "color": this.props.color,
      "font": "28px Raleway, sans-serif",
      "font-weight": "500",
    };
    return (
      <div className="quote-text" style={divStyle}>
        <h1 id="quote-text" style={textStyle}>{this.props.quote}</h1>
      </div>
    );
  }
}
