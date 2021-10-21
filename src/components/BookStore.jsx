import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { getBooksAction } from "../actions";

const mapStateToProps = (state) => ({
  books: state.book.stock
})

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => {
    dispatch(getBooksAction())
  }
})

class BookStore extends Component {
  state = {
    bookSelected: null,
  };

  componentDidMount = async () => {
    // I'll need to invoke my action creator!
    this.props.getBooks()
  };

  changeBook = (book) => this.setState({ bookSelected: book });

  render() {
    return (
      <Row>
        <Col md={4}>
          <BookList
            bookSelected={this.state.bookSelected}
            changeBook={this.changeBook}
            books={this.props.books}
          />
        </Col>
        <Col md={8}>
          <BookDetail
            bookSelected={this.state.bookSelected}
          />
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
