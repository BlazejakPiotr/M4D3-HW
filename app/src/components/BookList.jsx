import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";
// import books from "../data/history.json";

const BookList = ({ booklist }) => (
  <Container>
    <Row>
      {booklist.map((book) => (
        <Col xs={3}>
          <SingleBook singleBook={book} />
        </Col>
      ))}
    </Row>
  </Container>
);
export default BookList;
