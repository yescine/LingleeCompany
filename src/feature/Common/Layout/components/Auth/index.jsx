import React from "react";
import style from "./index.module.scss";
import { Row, Col } from "antd";
import SquareAnimation from '../../../../TestComponent/SquarePage'

export const Auth = ({ children }) => {
  return (
    <div className={style.authLayout}>
      <SquareAnimation />
      <Row>
        <Col
          xs={{ span: 15, offset: 0 }}
          sm={{ span: 13, offset: 1 }}
          md={{ span: 12, offset:2 }}
          lg={{ span: 11, offset: 3 }}
          xl={{ span: 10, offset: 4 }}
        >
          {children}
        </Col>
      </Row>
    </div>
  );
};
