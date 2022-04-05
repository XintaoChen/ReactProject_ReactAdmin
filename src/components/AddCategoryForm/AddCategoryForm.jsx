import React from "react";
import { Form, Divider, Input } from "antd";

// redux
import { connect } from "react-redux";
import { createEditNameAction } from "../../redux/actions/category";

function AddCategoryForm(props) {
  const handleChange = (e) => {
    props.editName(e.target.value);
  };

  return (
    <Form
      initialValues={{
        remember: true,
      }}
    >
      <p>Add a new category as subcategory of current category</p>
      <Divider></Divider>
      <Form.Item>
        <div>Name</div>
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
})(AddCategoryForm);
