var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');

function cartTotals(){
  return AppStore.getCartTotals();
}

var CartSummary = React.createClass({
  mixins: [StoreWatchMixin(cartTotals)],
  render:function(){
    return (
      <div>
        <Link href="/src/cart" className="btn btn-warning">
          Cart Items: {this.state.qty} / ${this.state.total}
        </Link>
      </div>
    );
  }
});

module.exports = CartSummary;
