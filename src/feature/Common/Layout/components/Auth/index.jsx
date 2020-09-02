import React from "react";
import style from "./index.module.scss";
import { Row, Col } from "antd";

export const Auth = ({ children }) => {
  return (
    <div className={style.authLayout}>
      <Row>
        <Col
          xs={{ span: 14, offset: 3 }}
          sm={{ span: 12, offset: 4 }}
          md={{ span: 10, offset: 5 }}
          lg={{ span: 8, offset: 6 }}
          xl={{ span: 6, offset: 7 }}
        >
          {children}
        </Col>
      </Row>
    </div>
  );
};
