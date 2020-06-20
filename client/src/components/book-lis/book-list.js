import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {bindActionCreators} from "redux";
import Spinner from "../spinner";
import {connect} from 'react-redux';

import withBookStoreService from "../hoc";
import {fetchBooks, bookAddedToCart} from "../../actions";
// import {compose} from '../../utils';
import './book-list.css';
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    const {id} = book;
                    return (
                        <li key={id}><BookListItem
                            book={book}
                        onAddedToCart={() => onAddedToCart(id)}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

class BookListContainer extends Component {

    componentDidMount = async () => {
        const {fetchBooks} = this.props;
        fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return bindActionCreators ({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
};

export default
  withBookStoreService()(
    connect(mapStateToProps, mapDispatchToProps)(
      BookListContainer
    )
  )
  
// export default compose(
//     withBookStoreService(),
//     connect(mapStateToProps, mapDispatchToProps)
// )(BookListContainer);


