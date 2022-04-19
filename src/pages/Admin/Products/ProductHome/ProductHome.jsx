import { Card, Button, Select, Input, Table } from "antd";
import React, { useEffect, useState, useCallback } from "react";

import AddOneBtn from "../../../../components/AddOneBtn/AddOneBtn";
import LinkButton from "../../../../components/LinkButton/LinkButton";

import { reqProducts, reqSearchProducts } from "../../../../api";
import { PRODUCT_PAGE_SIZE } from "../../../../utils/constantUtils";
const { Option } = Select;

function ProductHome() {
  // useState
  const [productList, setProductList] = useState([]);
  const [totalProductNum, setTotalProductNum] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("productName");

  // useCallback
  const getProductsCallBack = useCallback(() => {
    getProducts();
  });
  const getProducts = async () => {
    setLoading(true);
    let productList;
    if (searchKeyword != "") {
      console.log("s");
      productList = await reqSearchProducts(
        pageNum,
        PRODUCT_PAGE_SIZE,
        searchKeyword,
        searchType
      );
    } else {
      console.log("n");
      productList = await reqProducts(pageNum, PRODUCT_PAGE_SIZE);
    }
    setLoading(false);
    if (productList.status === 0) {
      setProductList(productList.list);
      setTotalProductNum(productList.total);
    } else if (productList.status === 1) {
      console.log(productList.msg);
    }
  };

  // useEffect
  useEffect(() => {
    getProductsCallBack();
  }, [pageNum]);

  // other function

  const handleAddProduct = () => {};
  const handleSearch = (e) => {
    setSearchKeyword(e.target.parentNode.previousSibling.value || "");
    getProducts();
  };
  const title = (
    <div style={{ width: "30%" }}>
      <Select
        style={{ width: "8em" }}
        value={searchType}
        onChange={setSearchType}
      >
        <Option value="productName">name</Option>
        <Option value="productDesc">description</Option>
      </Select>
      <Input placeholder="key word" defaultValue={searchKeyword}></Input>
      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );

  const extra = (
    <AddOneBtn title="Add Product" handleClick={handleAddProduct}></AddOneBtn>
  );

  const columns = [
    {
      title: "Product",
      dataIndex: "productName",
    },
    {
      title: "Description",
      dataIndex: "desc",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price) => {
        return "$" + price;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        return (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button type="primary">Discontinued</Button>
            <span>Released</span>
          </span>
        );
      },
    },
    {
      title: "Operation",
      render: (product) => {
        return (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LinkButton>Specific</LinkButton>
            <LinkButton>Edit</LinkButton>
          </span>
        );
      },
    },
  ];

  return (
    <Card title={title} extra={extra}>
      <Table
        bordered
        dataSource={productList}
        columns={columns}
        rowKey={"_id"}
        loading={loading}
        pagination={{
          defaultPageSize: PRODUCT_PAGE_SIZE,
          showQuickJumper: true,
          total: totalProductNum,
          onChange: setPageNum,
        }}
      ></Table>
    </Card>
  );
}

export default ProductHome;
