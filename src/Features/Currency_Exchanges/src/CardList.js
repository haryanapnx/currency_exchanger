import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { convertToCurrency } from "commons/helper";

const CardList = ({ handleRemove, currency, calculate, rates }) => {
  return (
    <Card.Body>
      {currency.map((item, i) => (
        <Row className='mb-2' key={i}>
          <Col xs={10}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <h5>{item.base}</h5>
                  </Col>
                  <Col>
                    <h5>{convertToCurrency((item.value * calculate).toFixed(4))}</h5>
                  </Col>
                </Row>
                <h6>
                  <i>{item.label}</i>
                </h6>
                <i className="sub-title">
                  1 USD = {item.base} {rates[item.base]}
                </i>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={2} className='pt-5'>
            <Button onClick={() => handleRemove(item)} variant="outline-danger">
              {/* <span>&#x1F5D1;</span>  */}
              -
            </Button>
          </Col>
        </Row>
      ))}
    </Card.Body>
  );
};
export default CardList;
