import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

function AddOneBtn(props) {
  return (
    <Button type="primary" onClick={props.handleClick}>
      <PlusOutlined />
      {props.title}
    </Button>
  );
}

export default AddOneBtn;
