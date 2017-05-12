import React from 'react';

export default class EyesOnMe extends React.Component{
  constructor(props){
    super(props);

    this.blur = this.blur.bind(this);
    this.focus = this.focus.bind(this);
  }

  blur(){
    console.log('Hey! Eyes on me!');
  }

  focus(){
    console.log('Good!');
  }

  render(){
    return (
      <button onBlur={this.blur} onFocus={this.focus}>A Button</button>
    );
  }
}
