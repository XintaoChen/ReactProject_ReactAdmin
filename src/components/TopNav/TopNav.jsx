import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import memory from "../../utils/memoryUtils";
import storage from "../../utils/storageUtils";
import Clock from "../Clock/Clock";
import LinkButton from "../LinkButton/LinkButton";

import "./TopNav.less";
import { Modal } from "antd";

import { getTitle } from "../../config/munuConfig";

import { connect } from "react-redux";
import { createSelectionAction } from "../../redux/actions/curTag";

function TopNav(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigator = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    memory.user = {};
    storage.deleteUser();
    navigator("/login");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { curTag } = props;

  return (
    <div className="top-nav">
      <div className="top-nav-top">
        <span>Welcome, {memory.user.username}</span>
        <LinkButton onClick={showModal}>Exit</LinkButton>
      </div>
      <div className="top-nav-bottom">
        <div className="top-nav-bottom-left">{getTitle(curTag[0])}</div>
        <div className="top-nav-bottom-right">
          <Clock></Clock>
        </div>
      </div>
      <Modal
        title="Exit..."
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure to log out? You will back to login page.</p>
      </Modal>
    </div>
  );
}

export default connect((state) => ({ curTag: state.curTag }), {
  select: createSelectionAction,
})(TopNav);
