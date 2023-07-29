import './App.css';
import React, { useState } from "react";

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
  }

  async getQuote() {
    const colorSet = ["#73A857", "#F39C12", "#BDBB99", "#E74C3C", "#9B59B6", "#2C3E50", "#FB6964", "#77B1A9", "#342224"];
    const url = 'https://api.quotable.io/quotes/random';
    const options = {
      method: 'GET',
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const resultJson = JSON.parse(result)[0];
      this.props.setStates('quote', resultJson['content']);
      this.props.setStates('author', resultJson['author']);

      //To change the color at random
      let num = Math.floor(Math.random() * 10)%9;
      this.props.setStates('color', colorSet[num]);
    } catch (error) {
      console.error(error);
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
          "position": "relative",
          "right": -180
      }

      return <button onClick={() => this.getQuote()} style={buttonStyle}>{ this.props.content }</button>;
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

  const colorSet = ["#73A857", "#F39C12", "#BDBB99", "#E74C3C", "#9B59B6", "#2C3E50", "#FB6964", "#77B1A9", "#342224"];
  const num = Math.floor(Math.random()*10)%9;
  const [appColor, updateColor] = useState(colorSet[num]);
  const [quote, updateQuote] = useState(myQuote);
  const [author, updateAuthor] = useState(myAuthor)

  // const myStates = {
  //   colorState: updateColor,
  //   quoteState: updateQuote,
  //   authorState: updateAuthor
  // }

  function callState(myState, value) {
    if (myState === 'color')
      updateColor(value);
    else if (myState === 'quote')
      updateQuote(value);
    else if (myState === 'author')
      updateAuthor(value);
    else
      return null;
  }

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
        <Clicker id="new-quote" setStates={callState} color={appColor} content="New quote"/><br/>
      </div>
    </div>
  );
}