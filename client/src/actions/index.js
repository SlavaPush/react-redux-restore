const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

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
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
};

const bookRemovedFromCArt = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}

// const fetchBooksOld = (bookstoreService, dispatch) => async () => {
//     try {
//         dispatch(booksRequested());
//         const data = await bookstoreService.getBooks();
//         dispatch(booksLoaded(data))
//     } catch (e) {
//         dispatch(booksError(e))
//     }
// };

const fetchBooks = (bookstoreService) => () => async (dispatch) => {
    try {
        dispatch(booksRequested());
        const data = await bookstoreService.getBooks();
        dispatch(booksLoaded(data));
    } catch (e) {
        dispatch(booksError(e));
    }
};

export {
    fetchBooks,
    bookAddedToCart,
    allBooksRemovedFromCart,
    bookRemovedFromCArt
};
