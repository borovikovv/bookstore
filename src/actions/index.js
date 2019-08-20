
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksError = (hasError) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: hasError
  };
};

export const addBookToCart = (bookId) => {
  return {
    type: 'ADD_BOOK_TO_CART',
    payload: bookId
  };
};

export const bookRemovedToCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_TO_CART',
    payload: bookId
  };
};

export const allBooksRemovedToCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_TO_CART',
    payload: bookId
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data)=> {
      dispatch(booksLoaded(data))
    })
    .catch((err) => {
      dispatch(booksError(err))
    });
}

export {
  fetchBooks
};
