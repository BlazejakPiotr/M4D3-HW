import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render({ singleBook }) {
    return (
      <Card style={{ width: "18rem" }} key={singleBook.asin}>
        <Card.Img variant="top" src={singleBook.img} />
        <Card.Body>
          <Card.Title>{singleBook.title}</Card.Title>

          <Button
            onClick={() => this.setState({ selected: true })}
            variant="primary"
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
