import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        key={this.props.singleBook.asin}
        onClick={this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={this.props.singleBook.img} />
        <Card.Body>
          <Card.Title>{this.props.singleBook.title}</Card.Title>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

// const SingleBook = ({ singleBook }) => (
//   <Card style={{ width: "18rem" }} key={singleBook.asin}>
//     <Card.Img variant="top" src={singleBook.img} />
//     <Card.Body>
//       <Card.Title>{singleBook.title}</Card.Title>

//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//   </Card>
// );
export default SingleBook;
