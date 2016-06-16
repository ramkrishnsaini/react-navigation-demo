import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    getInitialState () {
    return {
    number:this.props.params.numId
};
},
    handleNumberChange(e){
        this.setState({number: e.target.value});

},
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
<span>{this.props.params.numId}</span>
          {this.props.children}

          <form>
                                           author<input type="text" value={this.state.number}  onChange={this.handleNumberChange}/><br/>
                                           text<input type="text"/><br/>
                                           <input type="submit" value="submit"/>
                                           </form>
      </div>
    )
  }
})
