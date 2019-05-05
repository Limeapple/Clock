import React from "react";
import './App.css'
import Quote from './Quote'
class Canvas extends React.Component {
  state = {
    hexSize: 20,
    date: this.props.seconds,
    canvasSize:{canvasWidth: 490,canvasHeight:490}
  }
  componentDidMount(){
    const{canvasHeight,canvasWidth}=this.state.canvasSize;
    this.timer = setInterval(
      () => {
        this.setState(prevState => {
          return {
            date: prevState.date === 59 ? 0 : prevState.date + 1,
          };
        }); 
      },
    1000.001
    );

    this.canvasHex.width=canvasWidth;
    this.canvasHex.height=canvasHeight;
    this.drawline(this.canvasHex)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.date !== prevState.date) {
      this.drawline(this.canvasHex)
    }
  }
  drawline = (canvasID) => {
    const{canvasHeight,canvasWidth}=this.state.canvasSize;
    const ctx = canvasID.getContext("2d");
    ctx.clearRect(0,0,canvasHeight, canvasWidth);
    ctx.beginPath();
    ctx.strokeStyle = "#28D1FA";
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.shadowBlur = 15;
ctx.shadowColor = "#28D1FA";
ctx.font = "30px Arial";
ctx.fillStyle = "#28D8FA";
ctx.fillText(this.props.date, 100, 180);
ctx.fillText(this.props.dayWeek, 280, 180);
    ctx.arc(240, 249, 200, Math.PI / 180 * (270), Math.PI / 180 * (this.state.date * 6) - 89.64);
    ctx.stroke();
    ctx.beginPath();
    ctx.shadowBlur=2;
    ctx.lineWidth = 2;
    ctx.font = "60px monospace";
    ctx.fillText(this.props.time, 60, 280);
      ctx.arc(240, 249, 200, Math.PI / 180 * (270), 360);
      ctx.stroke();
    ctx.closePath();
  }
  render(){
     return (
    <div className="App">
     <canvas ref={canvasHex=>this.canvasHex=canvasHex}/>
    </div>
  );
  }

}

export default Canvas
