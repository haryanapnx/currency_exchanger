import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrency } from "./redux/currencyAction";
import { Row, Col, Card } from "react-bootstrap";
import CardList from "./src/CardList";
import Loader from "Components/Loader";
import CardFooter from "./src/CardFooter";
import CardHeader from "./src/CardHeader";

let currency_base = [
  "CAD-Dollar Canada",
  "IDR-Indonesian Rupiah",
  "GBP-British Pound",
  "CHF-Swiss Franc",
  "SGD-Singapore Dollar",
  "INR-India Rupee",
  "MYR-Malaysian Ringgit",
  "JPY-Japan Yen",
  "KRW-Korean Won"
];

const Currency = () => {
  const dispatch = useDispatch();
  const { isLoading, rates } = useSelector(state => state.currency);
  const [currency, setCurrency] = useState([]);
  const [calculate, setCalculate] = useState(10.0);

  useEffect(() => {
    dispatch(getCurrency());
    return () => {};
  }, [dispatch]);

  const handleChange = e => {
    const { value } = e.target;
    let splitValue = value.split("-");

    setCurrency([
      ...currency,
      { base: splitValue[0], value: rates[splitValue[0]], label: value }
    ]);
    handleSplice(currency_base, value);
  };

  const handleSplice = (arr, value) => {
    let index = arr.indexOf(value);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  };

  const handleRemove = item => {
    let newCurrency = currency.filter(obj => obj.base !== item.base);
    currency_base.push(item.label);
    setCurrency(newCurrency);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Row style={{ marginTop: "10%" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <CardHeader setCalculate={setCalculate} calculate={calculate} />
            <CardList
              handleRemove={handleRemove}
              currency={currency}
              calculate={calculate}
              rates={rates}
            />
            <CardFooter
              handleChange={handleChange}
              currency_base={currency_base}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Currency;
