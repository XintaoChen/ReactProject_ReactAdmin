import React from "react";
import { Form, Input } from "antd";

// redux
import { connect } from "react-redux";
import {
  createEditNameAction,
  createEditStatusAction,
} from "../../redux/actions/category";

function UpdateCategoryForm(props) {
  const [form] = Form.useForm();
  const handleChange = async (e) => {
    props.editName(e.target.value);
    try {
      await form.validateFields();
      props.editStatus(1);
    } catch (err) {
      props.editStatus(0);
    }
  };
  return (
    <Form preserve={false} form={form}>
      <div>Name</div>
      <Form.Item
        name="categoryName"
        rules={[
          {
            required: true,
            message: "Category name can not be empty!",
          },
          {
            pattern: /^[\w]+$/,
            message: "Please input number, letter or underline!",
          },
        ]}
      >
        <Input
          placeholder={props.targetCategory.name}
          onChange={handleChange}
        ></Input>
      </Form.Item>
    </Form>
  );
}

export default connect((state) => ({ targetCategory: state.targetCategory }), {
  editName: createEditNameAction,
  editStatus: createEditStatusAction,
})(UpdateCategoryForm);
