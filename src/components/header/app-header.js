var React = require('react');
var CartSummary = require('./app-cartsummary.js');

var Header = React.createClass({
  render:function(){
    return (
        <nav className="navbar navbar-dark bg-dark mb-5">
          <div className="container">
          <a className="navbar-brand" href="#">
            Lets Shop
          </a>
          <CartSummary />
          </div>
        </nav>
    );
  }
});

module.exports = Header;
