var React = require('react');
var AppActions = require('../../actions/app-actions');

var IncreaseItem = React.createClass({
  handler: function(){
    AppActions.increaseItem(this.props.index)
  },
  render:function(){
    return <button className="btn btn-primary" onClick={this.handler}>+</button>
  }
});

module.exports = IncreaseItem;
