import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
Forms.propTypes = {};

function Forms(props) {
  return (
    <Row>
      <Col>
        <Form className="">
            <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Book name"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Book genre"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control as="select" defaultValue="Select author">
                    <option value="Select author" disabled>
                        Select author
                    </option>
                </Form.Control>
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">Add book</Button>
        </Form>
      </Col>
      <Col>
      <Form className="">
            <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Author name"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control type="number" placeholder="Author age"/>
            </Form.Group>
         
            <Button className="float-right" variant="info" type="submit">Add author</Button>
        </Form></Col>
    </Row>
  );
}

export default Forms;
