import React from "react";
import { Button, Row, Col, Card, Form } from "react-bootstrap";

const CardFooter = ({ currency_base, handleChange }) => {
  return (
    <Card.Footer className="text-right">
      <Row noGutters>
        <Col md="8">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control value="" onChange={handleChange} as="select">
              <option value="">...</option>
              {currency_base.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md="4">
          <Button variant="primary">+ Add More Currencies</Button>
        </Col>
      </Row>
    </Card.Footer>
  );
};
export default CardFooter;
