import { Spinner } from "react-bootstrap";

import React from 'react'

const Loader = () => {
  return (
    <Spinner
        animation="border"
        role="status"
        style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block",
        }}
    ></Spinner>
  );
};

export default Loader