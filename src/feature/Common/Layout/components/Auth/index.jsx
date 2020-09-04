import React from "react";
import style from "./index.module.scss";
import { Row, Col } from "antd";
import SquareAnimation from '../../../../TestComponent/SquarePage'
const span = 8;
const offset = 1;
export const Auth = ({ children }) => {
  return (
    <div className={style.authLayout}>
      <SquareAnimation />
      <Row>
        <Col
          xs={{ span: span+8, offset: offset }}
          sm={{ span: span+6, offset: offset+1 }}
          md={{ span: span+4, offset: offset+2 }}
          lg={{ span: span+2, offset: offset+3 }}
          xl={{ span: span, offset: offset+4 }}
        >
          {children}
        </Col>
      </Row>
    </div>
  );
};
