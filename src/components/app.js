var React = require('react');
var Catalog = require('./catalog/app-catalog');
var Cart = require('./cart/app-cart');
var Router = require('react-router-component');
var CatalogDetail = require('./product/app-catalogdetail');
var Template = require('./app-template.js');
var Locations = Router.Locations;
var Location  = Router.Location;

var App = React.createClass({
  render:function(){
    return (
      <Template>
        <Locations>
          <Location path="/src/" handler={Catalog} />
          <Location path="/src/cart" handler={Cart} />
          <Location path="/src/item/:item" handler={CatalogDetail} />
        </Locations>
      </Template>
    );
  }
});

module.exports = App;
