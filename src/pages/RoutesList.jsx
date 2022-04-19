import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = lazy(() => import("./Login/Login"));
const Admin = lazy(() => import("./Admin/Admin"));
const Home = lazy(() => import("./Admin/Home/Home"));
const Categories = lazy(() => import("./Admin/Categories/Categories"));
const Products = lazy(() => import("./Admin/Products/Products"));
const ProductUpdate = lazy(() =>
  import("./Admin/Products/ProductUpdate/ProductUpdate.jsx")
);
const ProductHome = lazy(() =>
  import("./Admin/Products/ProductHome/ProductHome")
);
const ProductDetails = lazy(() =>
  import("./Admin/Products/ProductDetails/ProductDetails")
);
const Roles = lazy(() => import("./Admin/Roles/Roles"));
const Users = lazy(() => import("./Admin/Users/Users"));
const BarCharts = lazy(() => import("./Admin/Charts/BarCharts/BarCharts"));
const LineCharts = lazy(() => import("./Admin/Charts/LineCharts/LineCharts"));
const PieCharts = lazy(() => import("./Admin/Charts/PieCharts/PieCharts"));

function RoutesList() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Admin></Admin>}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="products" element={<Products></Products>}>
            <Route path="" element={<ProductHome></ProductHome>}></Route>
            <Route
              path="update"
              element={<ProductUpdate></ProductUpdate>}
            ></Route>
            <Route
              path="details"
              element={<ProductDetails></ProductDetails>}
            ></Route>
          </Route>
          <Route path="categories" element={<Categories></Categories>}></Route>
          <Route path="roles" element={<Roles></Roles>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="barCharts" element={<BarCharts></BarCharts>}></Route>
          <Route path="lineCharts" element={<LineCharts></LineCharts>}></Route>
          <Route path="pieCharts" element={<PieCharts></PieCharts>}></Route>
          <Route path="" element={<Navigate to={"home"}></Navigate>}></Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default RoutesList;
