import React, { useEffect, useState } from "react";

import LinkButton from "../../../components/LinkButton/LinkButton";

import { Card, Button, Table, Space, message, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { reqCategories } from "../../../api";
import AddCategoryForm from "../../../components/AddCategoryForm/AddCategoryForm";
import UpdateCategoryForm from "../../../components/UpdateCategoryForm/UpdateCategoryForm";

function Categories() {
  const [isModalVisible, setIsModalVisible] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [parentId, setParentId] = useState("000000000000000000000000");
  const [title, setTitle] = useState(["Catagories"]);
  const [pathId, setPathId] = useState(["000000000000000000000000"]);
  const [selectedCategory, setSelectedCategory] = useState("xx");
  const addCategory = () => {
    setIsModalVisible(0);
  };

  const handleAddCategory = (values) => {
    console.log(values);
  };

  const showUpdate = (category) => {
    setSelectedCategory(category);
    setIsModalVisible(2);
  };

  const updateCategory = () => {


    
    getCategories();
    setIsModalVisible(0);
  };

  const handleUpdateCategory = (values) => {
    console.log(values);
  };

  const handleCancel = () => {
    setIsModalVisible(0);
  };
  const extra = (
    <Button type="primary" onClick={() => setIsModalVisible(1)}>
      <PlusOutlined />
      Add One
    </Button>
  );

  async function getCategories() {
    setLoading(true);
    let categories = await reqCategories(parentId);
    setLoading(false);
    if (categories.status === 0) {
      setCategories(categories.list);
    } else if (categories.status === 1) {
      message.error("Failed to request list of category");
      console.log(categories.msg);
    }
  }

  useEffect(() => {
    (async function () {
      setLoading(true);
      let categories = await reqCategories(parentId);
      setLoading(false);
      if (categories.status === 0) {
        setCategories(categories.list);
      } else if (categories.status === 1) {
        message.error("Failed to request list of category");
        console.log(categories.msg);
      }
    })();
  }, [parentId]);

  const handleClick = (category) => {
    setParentId(category._id);
    setTitle([...title, category.name]);
    setPathId([...pathId, category._id]);
  };

  const renderTitle = () => {
    return title.map((t, l) => {
      if (l === title.length - 1) {
        return <span key={t}>{t}</span>;
      } else {
        return (
          <span key={t}>
            <span
              style={{ color: "green", cursor: "pointer" }}
              onClick={() => {
                setParentId(pathId[l]);
                setPathId(pathId.slice(0, l + 1));
                setTitle(title.slice(0, l + 1));
              }}
            >
              {t}
            </span>
            <span>{" > "}</span>
          </span>
        );
      }
    });
  };

  const columns = [
    {
      title: "Category",
      dataIndex: "name",
      key: "category",
    },
    {
      title: "Operation",
      key: "Operation",
      width: 300,
      render: (category) => (
        <Space size={"middle"}>
          <LinkButton onClick={() => handleClick(category)}>Expand</LinkButton>
          <LinkButton onClick={() => showUpdate(category)}>Edit</LinkButton>
          <LinkButton>Delete</LinkButton>
        </Space>
      ),
    },
  ];

  return (
    <Card title={renderTitle()} extra={extra} style={{ width: "100%" }}>
      <Table
        columns={columns}
        pagination={{ pageSize: 5 }}
        dataSource={categories}
        loading={loading}
        bordered
        rowKey={"_id"}
      />
      <Modal
        title="Add category"
        visible={isModalVisible === 1}
        onOk={addCategory}
        onCancel={handleCancel}
      >
        <AddCategoryForm addCategory={handleAddCategory}></AddCategoryForm>
      </Modal>
      <Modal
        title="Update category"
        visible={isModalVisible === 2}
        onOk={updateCategory}
        onCancel={handleCancel}
      >
        <UpdateCategoryForm
          categoryName={selectedCategory.name}
          updateCategory={handleUpdateCategory}
        ></UpdateCategoryForm>
      </Modal>
    </Card>
  );
}

export default Categories;
