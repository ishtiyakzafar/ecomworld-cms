import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./config/ProtectedRoutes.jsx";
import PublicRoutes from "./config/PublicRoutes.jsx";
import Layout from "./components/Layout/Layout.jsx";

const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound.jsx"));
const ProductList = lazy(() => import("./pages/ProductList/ProductList.jsx"));
const OrderDetails = lazy(() => import("./pages/OrderDetails/OrderDetails.jsx"));
const AddUpdateProduct = lazy(() => import("./pages/AddUpdateProduct/AddUpdateProduct.jsx"));
const CustomerList = lazy(() => import("./pages/CustomerList/CustomerList.jsx"));
const OrderList = lazy(() => import("./pages/OrderList/OrderList.jsx"));
const Login = lazy(() => import("./pages/Login/Login.jsx"));
const CategoriesList = lazy(() => import("./pages/CategoriesList/CategoriesList.jsx"));


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/add" element={<AddUpdateProduct />} />
            <Route path="/products/update/:id" element={<AddUpdateProduct />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/categories" element={<CategoriesList />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
};

export default App;