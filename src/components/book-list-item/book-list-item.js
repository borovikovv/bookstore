import React, { Fragment } from 'react';
import './book-list-item.css';
const BookListItem = ({ book, addItemToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <Fragment>
      <div className='book-list-item'>
        <div className='d-flex book-cover'>
          <img src={coverImage} alt='cover' className='cover-image' />
        </div>
        <div className='book-details'>
          <span className='title'>{title}</span>
          <span className='autor'>{author}</span>
          <span className='price'>${price}</span>
          <button 
          onClick={ addItemToCart }
          className='btn btn-primary'>Add to card</button>
        </div>
      </div>
    </Fragment>
  );
};

export default BookListItem;
