import React from "react";
import { Form, Input } from "antd";

// redux
import { connect } from "react-redux";
import { createEditNameAction } from "../../redux/actions/category";

function UpdateCategoryForm(props) {
  const handelChange = (e) => {
    props.editName(e.target.value);
  };
  return (
    <Form>
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
      >
        <Input
          placeholder={props.targetCategory.name}
          onChange={handelChange}
        ></Input>
      </Form.Item>
    </Form>
  );
}

export default connect((state) => ({ targetCategory: state.targetCategory }), {
  editName: createEditNameAction,
})(UpdateCategoryForm);
