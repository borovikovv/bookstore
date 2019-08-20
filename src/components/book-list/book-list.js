import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { fetchBooks, addBookToCart } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';

import './book-list.css';

const BookList = ({books, addItemToCart}) => {
  return(
    <div>
      <ul>
        {
          books.map((book)=> {
            return (
              <li key={book.id} className='book-list'> 
              <BookListItem 
                addItemToCart={ ()=> addItemToCart(book.id) }
                book={book} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}


class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, hasError, addItemToCart } = this.props;

    if(loading) {
      return <Spinner />
    }
    if(hasError) {
      return <ErrorIndicator />
    }

    return <BookList 
      addItemToCart={ addItemToCart }
      books={books} />
  }

}

const mapStateToProps = ({bookList: {books, loading, hasError}}) => {
  return {
    books: books,
    loading: loading,
    hasError: hasError
  }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {

  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    addItemToCart: (id) => dispatch(addBookToCart(id))
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
