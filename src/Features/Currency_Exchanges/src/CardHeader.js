import React from "react";
import { Row, Col, Card, InputGroup, Form } from "react-bootstrap";

const CardHeader = ({ setCalculate, calculate }) => {
  return (
    <Card.Header>
      <Row>
        <Col sm="6">
          <b>USD</b>
          <br />
          <i>United States Dollars</i>
        </Col>
        <Col sm="6">
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="igp">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={e => setCalculate(e.target.value)}
                  type="text"
                  value={calculate}
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
        </Col>
      </Row>
    </Card.Header>
  );
};
export default CardHeader;
