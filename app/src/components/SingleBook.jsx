import Card from "react-bootstrap/Card";

const SingleBook = ({ book }) =>
  book ? (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="book.img" />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ) : (
    <div>no book selected</div>
  );
