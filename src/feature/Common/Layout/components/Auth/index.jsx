import React from "react";
import style from "./index.module.scss";
import { Row, Col } from "antd";
import SquareAnimation from '../../../../TestComponent/SquarePage'

export const Auth = ({ children }) => {
  return (
    <div className={style.authLayout}>
      <SquareAnimation />
      <Row style={{marginTop:'10%',paddingRight:'3%'}}>
        <Col
          xs={{ span: 16, offset: 1 }}
          sm={{ span: 13, offset: 3 }}
          md={{ span: 12, offset:4 }}
          lg={{ span: 11, offset: 5 }}
          xl={{ span: 8, offset: 6 }}
        >
          {children}
        </Col>
      </Row>
    </div>
  );
};
