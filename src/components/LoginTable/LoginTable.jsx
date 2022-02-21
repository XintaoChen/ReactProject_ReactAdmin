import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function LoginTable(props) {
  const onFinish = (values) => {
    props.getLoginInfo(values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
          {
            pattern: /^[\w]+$/,
            message: "Please input only numbers, letters or underline.",
          },
          {
            min: 4,
            message: "Please input no less than 4 letters!",
          },
          {
            max: 12,
            message: "Please input no more than 12 letters!",
          },
        ]}
        validateFirst={true}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
          {
            pattern: /^[\w]+$/,
            message: "Please input only numbers, letters or underline.",
          },
          {
            min: 4,
            message: "Please input no less than 4 letters!",
          },
          {
            max: 12,
            message: "Please input no more than 12 letters!",
          },
        ]}
        validateFirst={true}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginTable;
