var React = require('react');
var AppStore = require('../../stores/app-store.js');
var RemoveFromCart = require('./app-removefromcart.js');
var Increase = require('./app-decreaseitem')
var Decrease = require('./app-increaseitem')
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var Link = require('react-router-component').Link

function cartItems(){
  return {items: AppStore.getCart()}
}

var Cart = React.createClass({
  mixins:[StoreWatchMixin(cartItems)],
  render:function(){
    var total = 0;
    var items = this.state.items.map(function(item, i){
      var subtotal = item.cost * item.qty;
      total += subtotal;
      return (
          <tr key={i}>
            <td><RemoveFromCart index={i} /></td>
            <td>{item.title}</td>
            <td>{item.qty}</td>
            <td>
              <div className="btn-group">
              <Increase index={i} />
              <Decrease index={i} />
              </div>
            </td>
            <td>${subtotal}</td>
          </tr>
      );
    })
    return (
      <div>
      <table className="table table-hover">
          <thead className="thead-dark">
              <tr>
                <th></th>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-right">Total</td>
                <td>${total}</td>
              </tr>
            </tfoot>
          </table>
          <Link href="/src/" className="btn btn-primary">Continue Shopping</Link>
        </div>
    )
  }
});

module.exports = Cart
