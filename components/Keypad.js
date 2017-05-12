import React from 'react';

export default class Keypad extends React.Component{
  constructor(props){
    super(props);

    this.keyUp = this.keyUp.bind(this);
  }

  keyUp(){
    console.log('Entering password...');
  }

  render(){
    return (
      <input onKeyUp={this.keyUp} type="password" />
    );
  }
}
