import React from 'react';
import "./Clicker.js";

export default class Clicker extends React.Component {
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