import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export class Main extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {word_count: 0,};
  }

  count = (e) => {
    var text = e.target.value;
    text = text.replace(/(^\s*)|(\s*$)/gi,"");
    text = text.replace(/[ ]{2,}/gi," ");
    text = text.replace(/\n /,"\n");
    let n = text.split(' ').length;
    this.setState({word_count: n});
  };
  render() {
    return (
      <div style={{width:"60%", position:"absolute", marginLeft:"20%", marginTop:"5%", fontFamily:"serif"}} class=" main shadow-lg p-3 mb-5 bg-body-tertiary ">
        <h1 style={{textAlign:"center", fontWeight:"bolder"}}>Responsive Paragraph Word Counter</h1>
        <textarea style={{maxWidth:"95%"}} rows={"8"} cols={"400"} onChange={this.count}></textarea>
        <p>Word Count: {this.state.word_count}</p>
      </div>
    )
  }
}

export default Main
