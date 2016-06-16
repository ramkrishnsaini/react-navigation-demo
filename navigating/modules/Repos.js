import React from 'react'
import NavLink from './NavLink'


export default React.createClass({
    getInitialState () {
    return {
    number:this.props.params.numId,
    data:{info:[]},
    author: '',
    text: '',
    id:this.props.params.numId
};
},
    handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
      
  },
    componentDidMount: function() {
        var state=this;
        $.ajax({
          //type:"get",
          url: "../data.json",
          dataType: 'json',
          cache: false,
          //contentType: "application/json",
          success: function(data) {
              
              
              console.log('data',data);
              var filteredArry=[];
	      $.each(data.info,function(index, item ) {
		      console.log(item);
		      if(item.id==state.state.id)
  filteredArry.push(item);
});
        this.setState({data: filteredArry});
              console.log('filteredArry',filteredArry);
              this.setState({author: filteredArry[0].author, text: filteredArry[0].text});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      },
  render() {
      var data = this.state.data.info; 
      
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
<span>{this.props.params.numId}</span>
          {this.props.children}
        
  <form >
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
      </div>
    )
  }
})
