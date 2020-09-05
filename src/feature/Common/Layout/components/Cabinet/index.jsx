import React from "react";
import { Layout } from "antd";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import PropTypes from "prop-types";
import {Paper} from '@material-ui/core'
import style from "./index.module.scss";
import './index.css'

const { Content } = Layout;

const CabinetComponent = ({ children, menuList, user, logout }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header user={user} logout={logout} />
      <div style={{backgroundColor:'#EDEEF6',padding:'1rem'}}>
      <Layout className={"cabinetMain"}> 
        <Sidebar menuList={menuList} />
        <Layout >
          <Content
            className={style.cabinetContent}
            style={{
              background: "#FFFFFF",//App main display
              padding: 26,
              minHeight: 300
            }}
          >
            {children}
          </Content>
          <Footer/>
        </Layout>
      </Layout>
      </div>
    </Layout>
  );
};

CabinetComponent.propTypes = {
  menuList: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export const Cabinet = CabinetComponent;
