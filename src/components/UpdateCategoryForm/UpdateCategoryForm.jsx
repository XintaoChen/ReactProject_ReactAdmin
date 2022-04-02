import React from "react";
import { Form, Input } from "antd";
function UpdateCategoryForm(props) {
  const handelFinish = (values) => {
    props.updateCategoty(values);
  };
  return (
    <Form onFinish={handelFinish}>
      <div>Name</div>
      <Form.Item
        name="categoryName"
        rules={[
          {
            required: true,
            pattern: /^[\w]+$/,
            message: "Please input number, letter or underline!",
          },
        ]}
        initialValue={props.categoryName}
      >
        <Input></Input>
      </Form.Item>
    </Form>
  );
}

export default UpdateCategoryForm;
