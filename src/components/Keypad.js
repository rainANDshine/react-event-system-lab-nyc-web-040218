// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends React {
  tickle = () => {
    console.log('Entering password...');
  }
  
  render() {
    return (
      <input type="password" onClick={this.tickle}/>
    )
  }
};

