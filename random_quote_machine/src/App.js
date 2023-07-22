import './App.css';
import React from "react";
// import Clicker from './components/quote_box/Clicker.js';

function App() {
  document.body.style = "background-color: #73A857";

  const appStyle= {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "100vh",
  }
  return (
    <div style={appStyle}>
      <QuoteBox color="#73A857"/>
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

      const clickStyle = (this.props.clickStyle == null) ? buttonStyle : Object.assign(this.props.clickStyle, buttonStyle);
      
      return <button style={clickStyle}>{ this.props.content }</button>;
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

class QuoteBox extends React.Component {
  QuoteBox(props) {
    this.super(props);
  }

  render() {
    const myQuote = "Life is what happens to you, While you're busy making other plans.";

    const quoteBoxStyle = {
      "border-radius": "3px",
      "width": "450px",
      "padding": "40px 50px",
      "background-color": "#ffffff",
    }

    const newQuoteStyle = {
      "position": "relative",
      "right": -180,
    }

    return (
      <div style={quoteBoxStyle}>
        <QuoteText quote={myQuote} color={this.props.color}/>
        <QuoteAuthor id="#author" color={this.props.color} authorName="John Lennon" /><br/><br/>
        <div className="buttons" style={{"display": "flex", "justifyContent": "space-between"}}>
          <Clicker id="#tweet-quote" color={this.props.color} content="a" /><br/>
          <Clicker id="#new-quote" clickStyle={newQuoteStyle} color={this.props.color} content="New quote"/><br/>
        </div>
      </div>
    );
  }

}