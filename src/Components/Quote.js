import React from "react"
import './App.css'
class Quote extends React.Component{
    state={
         quoteInfo:[
             {
                quote:"If time is money then stop wasting money",
                name:"Anonymous"
            },
            {
              quote:"The best way to predict the future is to create it",
              name:"Peter Drucker"
            },
              {
                quote:"Time isn't the main thing, it's the only thing",
                name:"Miles Davis"
            },
              {
                quote:"Time is a gift that most of us take for granted",
                name:"Cheryl Richardson"
            },
            {
                quote:"Time is what we want most, but value least",
                name:"Willam Fern"
            },
             {
                quote:"Time flies over us, but leaves its shadow behind",
                name:"Nathaniel Hawthorne"
            },
             {
                quote:"It's not about having time. It's about making time",
                name:"Anonymous"
            },
             {
                quote:"Someone is sitting in the shade today because someone planted a tree before",
                name:"Warren Buffet"
            },
             {
                quote:"Don't watch the clock; do what it does, keep going",
                name:"Sam Levenson"
            },
             {
                quote:"Better ten minutes early than ten minutes late",
                name:"Anonymous"
            },
             {
                quote:"When you invest, you are buying a day that you don't have to work",
                name:"Arya Laraya"
            },
             {
                quote:"The key is not spending time, but investing it",
                name:"Stephen R. Covey"
            },
             {
                quote:"Patience is bitter but its fruit is sweet",
                name:"Jean Jacques Rousseau"
            },
             {
                quote:"There's only one thing more precious than our time and that's who we spend it with",
                name:"Leo Christopher"
            },
             {
                quote:"It sounds simple, but sometimes you have to give time, time",
                name:"Anonymous"
            },
             {
                quote:"The past, the present, and the future met at a bar. It was tense",
                name:"Anonymous"
            },
             {
                quote:"Yesterday is history, tomorrow is a mystery, and today is a gift–that is why it is called the present",
                name:"Master Oogway"
            },
             {
                quote:"When you are courting a nice girl, an hour seems like a second. When you sit on a red-hot cinder, a second seems like an hour. That's relativity",
                name:"Albert Einsten"
            },
             {
                quote:"If you spend too much time thinking about a thing, you’ll never get it done",
                name:"Bruce Lee"
            },
              {
                quote:"We must use time as a tool, not as a couch",
                name:"John F. Kennedy"
            },
             {
                quote:"If I had six hours to chop down a tree, I would spend the first four hours sharpening the axe",
                name:"Abraham Lincoln"
            },
             {
                quote:"Even a broken clock is right twice a day",
                name:"Anonymous"
            },
             {
                quote:"You may delay, but time will not",
                name:"Benjamin Franklin"
            },
             {
                quote:"Time moves slowly, but passes quickly",
                name:"Alice Walker"
            },
             {
                quote:"The years teach much the days never know",
                name:"Ralph Waldo Emerson"
            },
             {
                quote:"There are two days in my calendar: This day and that Day",
                name:"Martin Luther"
            },
             {
                quote:"The two most important days in your life are the day you are born and the day you find out why",
                name:"Mark Twain"
            },
             {
                quote:"Every moment is the paradox of now or never",
                name:"Simon Van Booy"
            },
             {
                quote:"Time, as it grows old, teaches all things",
                name:"Aeschylus"
            },
             {
                quote:"Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back",
                name:"Harvey Mackay"
            },
             {
                quote:"The bad news is time flies. The good news is you’re the pilot",
                name:"Michael Altshuler"
            },
             {
                quote:"If we take care of the moments, the years will take care of themselves",
                name:"Maria Edgeworth"

            },
             {
                quote:"Be not afraid of growing slowly, be afraid only of standing still",
                name:"Chinese Proverb"
            },
             {
                quote:"Lack of direction, not lack of time, is the problem. We all have twenty-four hour days",
                name:"Zig Ziglar"
            },
             {
                quote:"Time doesn't exist, clocks do",
                name:"Anonymous"
            },
             {
                quote:"The best thing about the future is that it comes one day at a time",
                name:"Abraham Lincoln"
            }

         ],
        count:0

    }
componentDidMount(){
    this.updateQuote=setInterval(
      () => this.setState(prevState=>({
          count:prevState.count+1
      })),
      6000
    )
}
componentWillUnmount() {
    clearInterval(this.updateQuote);
  }
//failed attempt at randomly selecting quotes, come back another time when youre smarter dewd
/*
randomQuoteGenerator=()=>{
    let size=0
    this.setState(prevState=>{
       const update= prevState.quoteInfo.map(display=>{
           if(display.id==this.randomNumber(this.state.quoteInfo.length)){
            display.notShown=false
            size++

    }
        return display
    })
        return {
        quoteInfo:update
    }

    })
}
randomNumber=(num)=>{
  Math.round(Math.random()*num)
}
*/
    render(){

        return(
            <div>
            <div className="style">
            <h1>{this.state.quoteInfo[this.state.count%this.state.quoteInfo.length].quote}</h1>
            <br/>
              <h1>~{this.state.quoteInfo[this.state.count%this.state.quoteInfo.length].name}</h1>
            </div>

            </div>
        )
    }
}

export default Quote
