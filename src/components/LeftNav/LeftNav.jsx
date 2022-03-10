import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Menu } from "antd";

import "./LeftNav.less";
import { getIcon, menuList } from "../../config/munuConfig";
import logo from "../../assets/img/pikachu.png";

// redux
import { connect } from "react-redux";
import { createSelectionAction } from "../../redux/actions/LeftNav";

const { SubMenu } = Menu;

const menuGenerate = (menuList, path, openKeyList) => {
  return menuList.map((item) => {
    if (!item.children) {
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key} icon={getIcon(item.icon)}>
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      );
    } else {
      if (item.children.find((cItem) => cItem.key === path))
        openKeyList.push(item.key);

      return (
        <SubMenu
          key={item.key}
          title={<span>{item.title}</span>}
          icon={getIcon(item.icon)}
        >
          {menuGenerate(item.children)}
        </SubMenu>
      );
    }
  });
};

function LeftNav(props) {
  // get current path to determine defaultSelectedKeys
  const location = useLocation();
  const curPath = location.pathname;
  // console.log(curPath);
  // props.select([curPath]);
  const openKeyList = [];

  const menuNodes = menuGenerate(menuList, curPath, openKeyList);

  return (
    <div className="left-nav">
      <Link to={"/home"} className="left-nav-header">
        <img src={logo} alt="logo" />
        <h1>BMS</h1>
      </Link>
      <Menu
        selectedKeys={curPath}
        defaultOpenKeys={openKeyList}
        mode="inline"
        theme="dark"
        onClick={(event) => {
          props.select(event.keyPath);
        }}
      >
        {menuNodes}
      </Menu>
    </div>
  );
}

export default connect((state) => ({ leftNav: state.leftNav }), {
  select: createSelectionAction,
})(LeftNav);
