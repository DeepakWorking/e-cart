var React = require('react');
var AppActions = require('../../actions/app-actions');

var RemoveFromCart = React.createClass({
  handler: function(){
    AppActions.removeItem(this.props.index)
  },
  render:function(){
    return <button className="btn btn-danger" onClick={this.handler}>x</button>
  }
});

module.exports = RemoveFromCart;
