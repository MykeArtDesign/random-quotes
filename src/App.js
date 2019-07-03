import React, {Component} from 'react'
import citations from './citations'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends Component {
   
  state = {
    text: 'Ma première citation pourrait bien être la dernière',
    author: 'Myke'   
  }

  quoteClick = () => {
    const quotesArray = Object.keys(citations)

    const randomQuotes = quotesArray[Math.floor( Math.random() * quotesArray.length )]
    if(this.state.text !== citations[randomQuotes].text){
      this.setState(citations[randomQuotes])
    } else {
      this.quoteClick()
    }
  }

  render(){
    return (
      <div id="quote-box" className="container-fluid">
        <blockquote className="row card">
        <q id="text" className="text-center card-text">{this.state.text}</q>
        <cite id="author" className="text-center"> - {this.state.author} -</cite>
        </blockquote>
        <div className="d-flex flex-column align-items-center">
          <button className="btn btn-primary" id="new-quote" onClick={() => {this.quoteClick()}}>Nouvelle citation</button>
          <br/>
          <a href="twitter.com/intent/tweet" id="tweet-quote">Partager la citation</a>
        </div>
      </div>
    )
  }
}

export default App;
