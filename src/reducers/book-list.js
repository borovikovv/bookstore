const updateBookList = (state, action) => {
    if(state === undefined) {
      return {
        books: [],
        loading: true,
        hasError: null,
      };
    };
    switch(action.type) {
      case 'FETCH_BOOKS_SUCCESS':
        return {
          books: action.payload,
          loading: false,
          hasError: null
      };
      case 'FETCH_BOOKS_REQUEST':
        return {
          books: [],
          loading: true,
          hasError: null
      };
      case 'FETCH_BOOKS_FAILURE':
        return {
          books: [],
          loading: false,
          hasError: true
      };
      default:
        return state.bookList;
    }
};

export default updateBookList;