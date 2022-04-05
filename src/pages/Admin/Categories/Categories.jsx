import React, { useEffect, useState } from "react";

import LinkButton from "../../../components/LinkButton/LinkButton";

import { Card, Button, Table, Space, message, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  reqCategories,
  reqUpdateCategory,
  reqAddCategory,
  reqDeleteCategory,
} from "../../../api";
import AddCategoryForm from "../../../components/AddCategoryForm/AddCategoryForm";
import UpdateCategoryForm from "../../../components/UpdateCategoryForm/UpdateCategoryForm";

// redux
import { connect } from "react-redux";
import {
  createEditAction,
  createEditIdAction,
} from "../../../redux/actions/category";

function Categories(props) {
  const [isModalVisible, setIsModalVisible] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [parentId, setParentId] = useState("000000000000000000000000");
  const [title, setTitle] = useState(["Catagories"]);
  const [pathId, setPathId] = useState(["000000000000000000000000"]);

  const { edit, targetCategory, editId } = props;

  const handleClickAddOne = () => {
    setIsModalVisible(1);
    editId(parentId);
  };

  const addCategory = async () => {
    setIsModalVisible(0);

    // send add a new category request to back server
    const parentId = targetCategory._id;
    const name = targetCategory.name;
    let result = await reqAddCategory(name, parentId);
    if (result.status === 0) {
      // update table
      getCategories();
    } else {
      console.log(result.msg);
    }
  };

  const handleClickEdit = (category) => {
    edit(category);
    setIsModalVisible(2);
  };

  const updateCategory = async () => {
    setIsModalVisible(0);

    // send update request to back server
    const categoryId = targetCategory._id;
    const categoryName = targetCategory.name;
    let result = await reqUpdateCategory(categoryId, categoryName);
    if (result.status === 0) {
      // update table
      getCategories();
    } else {
      console.log(result.msg);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(0);
  };

  const extra = (
    <Button type="primary" onClick={handleClickAddOne}>
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

  const handleClickExpand = (category) => {
    setParentId(category._id);
    setTitle([...title, category.name]);
    setPathId([...pathId, category._id]);
  };

  const handleClickDelete = (category) => {
    setIsModalVisible(3);
    editId(category._id);
  };

  const deleteCategory = async () => {
    setIsModalVisible(0);
    // send delete request to back server
    const categoryId = targetCategory._id;
    console.log(categoryId);
    let result = await reqDeleteCategory(categoryId);
    if (result.status === 0) {
      // update table
      console.log(result.data);
      getCategories();
    } else {
      console.log(result.msg);
    }
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
          <LinkButton onClick={() => handleClickExpand(category)}>
            Expand
          </LinkButton>
          <LinkButton onClick={() => handleClickEdit(category)}>
            Edit
          </LinkButton>
          <LinkButton onClick={() => handleClickDelete(category)}>
            Delete
          </LinkButton>
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
        destroyOnClose
      >
        <AddCategoryForm></AddCategoryForm>
      </Modal>
      <Modal
        title="Update category"
        visible={isModalVisible === 2}
        onOk={updateCategory}
        onCancel={handleCancel}
        destroyOnClose
      >
        <UpdateCategoryForm></UpdateCategoryForm>
      </Modal>
      <Modal
        title="Delete category"
        visible={isModalVisible === 3}
        onOk={deleteCategory}
        onCancel={handleCancel}
      >
        <p>Are you sure to delete this...</p>
      </Modal>
    </Card>
  );
}

export default connect((state) => ({ targetCategory: state.targetCategory }), {
  edit: createEditAction,
  editId: createEditIdAction,
})(Categories);
