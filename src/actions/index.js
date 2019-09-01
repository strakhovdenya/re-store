const bookRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};


const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(bookRequested())
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
}

export {
    fetchBooks
};
