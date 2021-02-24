import React, { Component } from 'react';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
          colors: ["red", "yellow", "blue", "green", "purple", "pink"]
        };
    }
    
    
  changeBg() {
    const { colors } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    }
    

    render() {
        return (
            <div>
                  <button onClick={() => this.changeBg()}>Change Color</button>
            </div>
        );
    }
}

export default Background;