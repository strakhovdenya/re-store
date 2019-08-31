import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {connect} from 'react-redux';
import withBookstoreService from '../hoc';
import {booksLoaded} from "../../actions";
import {compose} from "../../utils";
import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        // 1. Recive data
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();

        // 2. dispatch action to store
        this.props.booksLoaded(data)

    }

    render() {
        const {books} = this.props;
        return (
            <List aria-label="main mailbox folders">
                {
                    books.map((book) => {
                        return (
                            <ListItem divider button
                                      key={book.id}>
                                <ListItemIcon>
                                    <ImportContactsIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <BookListItem
                                        book={book}/>
                                </ListItemText>
                            </ListItem>
                        );
                    })
                }

            </List>
        );
    }
}

const mapStateToProps = ({books}) => {
    return {books};
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);