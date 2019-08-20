const updateItem = (bookItems, item, itemIndex) => {

    if(item.count === 0 ) {
      return [
        ...bookItems.slice(0, itemIndex),
        ...bookItems.slice(itemIndex + 1)
      ]
    }
  
    if(itemIndex === -1 ){
      return [
        ...bookItems,
        item
      ];
    }
    return [
      ...bookItems.slice(0, itemIndex),
      item,
      ...bookItems.slice(itemIndex + 1)
    ];
};

const updateCartItems = (book, item = {}, quantiy) => {
    const { id = book.id, count = 0, title = book.title, total = 0} = item;
  
   return {
    id, 
    title,
    count : count + quantiy,
    total: total + quantiy * book.price
   };
};
  
  
const updateOrder = (state, bookId, quantiy) => {
  const { bookList: { books }, shoppingCart: { bookItems }} = state;
  const book = books.find(({id}) => id === bookId);
  const itemIndex = bookItems.findIndex(({id}) => bookId === id);
  const item = bookItems[itemIndex];

  const newItem = updateCartItems(book, item, quantiy);
  return {
    total: 0,
    bookItems: updateItem(bookItems, newItem, itemIndex)
  };
};


const updateShoppingCart = (state, action) => {
    if(state === undefined) {
      return {
        bookItems: [],
        total: 0
      };
    };
    switch(action.type) {
      case 'ADD_BOOK_TO_CART':
        return updateOrder(state, action.payload, 1);
      case 'BOOK_REMOVED_TO_CART':
        return updateOrder(state, action.payload, - 1);
      case 'ALL_BOOKS_REMOVED_TO_CART':
        const item = state.shoppingCart.bookItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -item.count);
      default:
        return state.shoppingCart;
    }
};

export default updateShoppingCart;