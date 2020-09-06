import React from "react";
import { Form, Icon, Input, Button } from "antd";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import {ReactComponent as RestorePasswordSvg} from '../../../../../assets/img/restorePassword.svg';

const RestorePasswordFormComponent = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        props.onSubmit(values);
      }
    });
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6} style={{height:'90%'}}>
        <RestorePasswordSvg />
      </Grid>

      <Grid item xs={6}>
        <Form onSubmit={handleSubmit} className={style.restorePassword}>
          <h1 className={style.authHeader}>Restore password</h1>
          <Form.Item
            {...props.isError && {
              help: props.errorMessage,
              validateStatus: "error"
            }}
          >
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your password!" }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          
          <Form.Item
            {...props.isError && {
              help: props.errorMessage,
              validateStatus: "error"
            }}
          >
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your email!" },
                { type: "email", message: "The input is not valid E-mail!" }
              ]
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="email"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              loading={props.isLoading}
              type="primary"
              style={{ width: "40%",marginLeft:'30%',backgroundColor:"#215CE1" }}
              htmlType="submit"
            >
              Submit
            </Button>
            <div className={style.singupLinks}>
              {"Have an account? "}
              <Link to="/">Login</Link>
            </div>
          </Form.Item>
      </Form>
      </Grid>
    
    </Grid>
  );
};

export const RestorePasswordForm = Form.create({ name: "signinForm" })(
  RestorePasswordFormComponent
);
