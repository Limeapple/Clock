import React, { Component } from 'react';
import './index.css';
import Quote from "./Components/Quote"
import CircleCanvas from './Components/CircleCanvas'
class App extends Component {
    state={
        date: new Date()
    }
componentDidMount() {
    this.timer = setInterval(
      () => this.setState({
      date: new Date()
    }),
      1000
    );
  }
componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.updateQuote);
  }
dayOfWeek=()=>{
    if(this.state.date.getDay()==0)
        return "SUN"
    if(this.state.date.getDay()==1)
        return "MON"
    if(this.state.date.getDay()==2)
        return "TUES"
    if(this.state.date.getDay()==3)
        return "WEDS"
    if(this.state.date.getDay()==4)
        return "THURS"
    if(this.state.date.getDay()==5)
        return "FRI"
    if(this.state.date.getDay()==6)
        return "SAT"
}
  render() {
    return (
      <div className="index">
      <CircleCanvas
      date={this.state.date.toLocaleDateString()}
      dayWeek={this.dayOfWeek()}
      time={this.state.date.toLocaleTimeString()}
      seconds={this.state.date.getSeconds()}/>
        <Quote count={this.state.count}/>
      </div>
    );
  }
}

export default App;
