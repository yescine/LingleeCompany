import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon,Badge } from "antd";
import PropTypes from "prop-types";

const { Sider } = Layout;

const SidebarComponent = props => {
  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["0"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {props.menuList.map((item, i) => {
          return (
            <Menu.Item key={i}>
              <Link to={item.path}>
                {item.badge?
                  <Badge offset={[-25,-2]} size="small" count={2}>
                    <Icon type={item.icon} />
                  </Badge> 
                  :
                  <Icon type={item.icon} />
                }
                <span>{item.label}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

SidebarComponent.propTypes = {
  menuList: PropTypes.array
};

export const Sidebar = SidebarComponent;
