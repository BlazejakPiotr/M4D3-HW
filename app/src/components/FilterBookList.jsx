import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
// import SingleBook from "./SingleBook";
import BookList from "./BookList";

import books from "../data/history.json";

class FilterBookList extends Component {
  state = {
    name: "",
    books: books,
  };

  handleSearch = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  handleSubmit = (e, name) => {
    e.preventDefault();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(this.state.name)
    );

    this.setState({ books: filteredBooks });
  };

  render() {
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={this.state.name}
            onChange={(e) => this.handleSearch(e)}
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Form>
        <BookList booklist={this.state.books} />
      </div>
    );
  }
}

export default FilterBookList;
