import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = ({ singleBook }) => (
  <Card style={{ width: "18rem" }} key={singleBook.asin}>
    <Card.Img variant="top" src={singleBook.img} />
    <Card.Body>
      <Card.Title>{singleBook.title}</Card.Title>

      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);
export default SingleBook;
