import React from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({
    getInitialState () {
    return {
      number:0
};
},
  handleNumberChange(e){
    this.setState({number: e.target.value});
},
    onClick(e) {
        e.preventDefault(); 
        var number = this.state.number;
        browserHistory.push('/repos/'+number+'');
},
  render() {
      return <div>
          <input type="number"  value={this.state.number} onChange={this.handleNumberChange}></input>
               <input type="submit" value="Next" onClick={this.onClick} />
  <br/>
          Home</div>
  }
})
