import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Icon,Avatar } from "antd";
import { UserOutline } from '@ant-design/icons';

import style from "./index.module.scss";

const { SubMenu } = Menu;
const { Header: AntHeader } = Layout;

const HeaderComponent = ({ user, logout }) => {
  return (
    <AntHeader style={{ padding: "0 24px" }}>
      <div className={style.logo} >Linglee</div>
      
      <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}> 
        <SubMenu
          style={{ float: "right" }}
          key="username"
          title={
            <span>
              <Avatar size="small" icon={<Icon type="user-o" />}/>{" "}
              {user.name} 
            </span>
          }
        >
          <Menu.Item onClick={() => logout()} key="1">
            Logout
          </Menu.Item>
        </SubMenu>
        <SubMenu
          style={{ float: "right" }}
          key="notification"
          title={
            <span>
              <Icon type="bell" /> 
            </span>
          }
        ></SubMenu>  
        <SubMenu
          style={{ float: "right" }}
          key="search"
          title={
            <span>
              <Icon type="search" /> 
            </span>
          }
        ></SubMenu>   
      </Menu>
    </AntHeader>
  );
};

HeaderComponent.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export const Header = HeaderComponent;
