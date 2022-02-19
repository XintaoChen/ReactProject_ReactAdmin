import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = lazy(() => import("./Login/Login"));
const Admin = lazy(() => import("./Admin/Admin"));

function RoutesList() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Admin></Admin>}></Route>
        <Route path="" element={<Navigate to="Login"></Navigate>}></Route>
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
