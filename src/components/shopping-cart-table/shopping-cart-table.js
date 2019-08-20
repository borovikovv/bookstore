import React from 'react';
import { connect } from 'react-redux';
import {addBookToCart, bookRemovedToCart, allBooksRemovedToCart} from '../../actions';
import './shopping-cart-table.css';

const ShoppingCartTable = ({items, total, OnIncrease, OnDecrease, OnDelete}) => {

  const renderRow = (item, idx) => {
    const { id, title, count, total} = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            onClick={()=> OnDelete(id) }
            className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o" />
          </button>
          <button 
            onClick={()=> OnDecrease(id) }
            className="btn btn-outline-warning btn-sm float-right">
              <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={()=> OnIncrease(id) }
            className="btn  btn-outline-success btn-sm float-right">
              <i className="fa fa-plus-circle" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2 className='table-header'>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};
const mapStateToProps = ({shoppingCart: {bookItems, total}}) => {
  return{
    items: bookItems,
    total: total
  }
}

const mapDispatchToProps = {
  OnIncrease: addBookToCart,
  OnDecrease: bookRemovedToCart,
  OnDelete: allBooksRemovedToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);