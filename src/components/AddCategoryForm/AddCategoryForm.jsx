import React from "react";
import { Form, Divider, Input } from "antd";

// redux
import { connect } from "react-redux";
import {
  createEditNameAction,
  createEditStatusAction,
} from "../../redux/actions/category";

function AddCategoryForm(props) {
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
    <Form form={form} preserve={false}>
      <p>Add a new category as subcategory of current category</p>
      <Divider></Divider>
      <div>Name</div>
      <Form.Item
        name="categorieName"
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
          placeholder="input name of category"
          onChange={handleChange}
        ></Input>
      </Form.Item>
    </Form>
  );
}

export default connect((state) => ({ targetCategory: state.targetCategory }), {
  editName: createEditNameAction,
  editStatus: createEditStatusAction,
})(AddCategoryForm);
