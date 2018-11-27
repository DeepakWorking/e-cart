var React = require('react');
var Link = require('react-router-component').Link;
var AddToCart = require('./app-addtocart');

var CatalogItem = React.createClass({
  render:function(){
      return (
          <div className="col-sm-3 mb-4">
            <div className="card">
            <img src={this.props.item.img} alt="" />
            <div className="card-body p-2 pb-3">
            <h4 className="text-dark">{this.props.item.title}</h4>
            <p>{this.props.item.summary}</p>
            <p>Price <span className="text-danger h5">${this.props.item.cost}</span> <span className="text-success">{this.props.item.inCart && '(' + this.props.item.qty + ' in cart)'}</span></p>
            <div className="">
            <Link href={'/src/item/' + this.props.item.id} className="btn btn-secondary mr-2">Learn More</Link>
            <AddToCart item={this.props.item} />
            </div>
            </div>
          </div>
          </div>

        )
  }
});

module.exports = CatalogItem;
