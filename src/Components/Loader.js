import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      align="center"
      style={{
        height: "100%",
        width: "100%",
        zIndex: 111,
        top: 0,
        backgroundColor: "#00000040",
        position: "absolute",
        padding: "20%"
      }}
    >
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};
export default Loader;
