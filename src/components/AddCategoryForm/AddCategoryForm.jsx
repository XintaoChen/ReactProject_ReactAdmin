import React from "react";
import { Form, Select, Input } from "antd";

function AddCategoryForm(props) {
  const handelFinish = (values) => {
    props.addCategory(values);
  };
  return (
    <Form
      initialValues={{
        remember: true,
      }}
      onFinish={handelFinish}
    >
      <Form.Item name="parentId">
        <div>Category</div>
        <Select defaultActiveFirstOption>
          <Select.Option value={"0"}>Catagory</Select.Option>
          <Select.Option value={"1"}>Computer</Select.Option>
          <Select.Option value={"2"}>Book</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="categoryName">
        <div>Name</div>
        <Input placeholder="input name of category"></Input>
      </Form.Item>
    </Form>
  );
}

export default AddCategoryForm;
