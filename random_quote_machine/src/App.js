import './App.css';
import React, { useState } from "react";
// import Clicker from './components/quote_box/Clicker.js';

function App() {
  const appStyle= {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "100vh",
  }
  return (
    <div style={appStyle}>
      <QuoteBox/>
    </div>
  );
}

export default App;

class Clicker extends React.Component {
  Clicker(props) {
      this.super(props);
      console.log("Attached");
  }

  updateColorFunction() {
    const colorSet = ["#73A857", "#F39C12", "#BDBB99", "#E74C3C", "#9B59B6", "#2C3E50", "#FB6964", "#77B1A9", "#342224"];
    let num = Math.floor(Math.random() * 10)%9;
    this.props.updateColor(colorSet[num]);
  }

  async getQuote() {
    if (typeof this.props.updateColor === "function") {
      const url = 'https://api.quotable.io/quotes/random';
      const options = {
        method: 'GET',
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const resultJson = JSON.parse(result)[0];
        this.props.updateQuote(resultJson['content']);
        this.props.updateAuthor(resultJson['author']);
        this.updateColorFunction();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("This function does nothing");
    }
  }

  render() {
      const buttonStyle = {
          "color": "white",
          "backgroundColor": this.props.color,
          "border": "none",
          "borderRadius": "3px",
          "font": "0.85em Arial",
          "height": "38px",
          "margin": "30px 0px 0px 0px",
          "padding": "8px 18px 6px 18px",
          "cursor": "pointer",
      }

      const clickStyle = (this.props.clickStyle == null) ? buttonStyle : Object.assign(this.props.clickStyle, buttonStyle);
      return <button onClick={() => this.getQuote()} style={clickStyle}>{ this.props.content }</button>;
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
      "float": "right",
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
      "textAlign": "center",
      "width": "450px",
      "height": "auto",
      "clear": "both",
    };
    const textStyle = {
      "color": this.props.color,
      "font": "28px Raleway, sans-serif",
      "fontWeight": "500",
    };
    return (
      <div className="quote-text" style={divStyle}>
        <h1 id="quote-text" style={textStyle}>{this.props.quote}</h1>
      </div>
    );
  }
}


function QuoteBox() {
  const myQuote = "Life is what happens to you, While you're busy making other plans.";
  const myAuthor = "John Lennon";
  const quoteBoxStyle = {
    "borderRadius": "3px",
    "width": "450px",
    "padding": "40px 50px",
    "backgroundColor": "#ffffff",
  }

  const newQuoteStyle = {
    "position": "relative",
    "right": -180,
  }

  const colorSet = ["#73A857", "#F39C12", "#BDBB99", "#E74C3C", "#9B59B6", "#2C3E50", "#FB6964", "#77B1A9", "#342224"];
  const num = Math.floor(Math.random()*10)%9;
  const [appColor, updateColor] = useState(colorSet[num]);
  const [quote, updateQuote] = useState(myQuote);
  const [author, updateAuthor] = useState(myAuthor)

  const aStyle = {
    "color": "white",
    "backgroundColor": appColor,
    "border": "none",
    "borderRadius": "3px",
    "font": "1.3em Arial",
    "height": "38px",
    "margin": "30px 0px 0px 0px",
    "padding": "8px 18px 6px 18px",
    "cursor": "pointer",
  }

  document.body.style = `background-color: ${appColor}`;
  return (
    <div id="quote-box" style={quoteBoxStyle}>
      <QuoteText id="text" quote={quote} color={appColor}/>
      <QuoteAuthor id="author" color={appColor} authorName={author} /><br/><br/>
      <div className="buttons" style={{"display": "flex", "justifyContent": "space-between"}}>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet"><button style={aStyle}>
          <b>t</b>
          </button></a>
        <Clicker id="new-quote" updateQuote={updateQuote} updateAuthor={updateAuthor} updateColor={updateColor} clickStyle={newQuoteStyle} color={appColor} content="New quote"/><br/>
      </div>
    </div>
  );
}