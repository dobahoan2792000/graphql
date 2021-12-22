import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
// import CardGroup from 'react-bootstrap/CardGroup'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookDetail from "../BookDetail";
import { getBooks } from "../../graphql-client/queries.js";
import { useQuery } from "@apollo/client";
BookList.propTypes = {};

function BookList(props) {
  const { loading, error, data } = useQuery(getBooks);
  const getData = () => {
    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error</p>;
    return data.books.map((p) => (
      <Col xs="6">
        <Card border="info" text="info" className="text-center shadow">
          <Card.Body>{p.name}</Card.Body>
        </Card>
      </Col>
    ));
  };
  return (
    <Row>
      <Col xs="8">
        <Row xs="2" className="g-4">
            {getData()}
        </Row>
      </Col>
      <Col>
        <BookDetail />
      </Col>
    </Row>
  );
}

export default BookList;
