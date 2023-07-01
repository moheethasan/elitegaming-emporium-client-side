import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import Products from "../pages/Products/Products.jsx";
import About from "../pages/About/About.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import MyCart from "../pages/Dashboard/UserDashboard/MyCart/MyCart.jsx";
import PurchasedProducts from "../pages/Dashboard/UserDashboard/PurchasedProducts/PurchasedProducts.jsx";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory.jsx";
import PaymentCheckout from "../pages/Dashboard/UserDashboard/MyCart/PaymentCheckout.jsx";
import MyProducts from "../pages/Dashboard/AdminDashboard/MyProducts/MyProducts.jsx";
import AddProduct from "../pages/Dashboard/AdminDashboard/AddProduct/AddProduct.jsx";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers.jsx";
import UpdateProduct from "../pages/Dashboard/AdminDashboard/MyProducts/UpdateProduct.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import Profile from "../pages/Dashboard/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "purchasedProducts",
        element: (
          <PrivateRoute>
            <PurchasedProducts></PurchasedProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "paymentCheckout/:id",
        element: (
          <PrivateRoute>
            <PaymentCheckout></PaymentCheckout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiUrl}/purchases/${params.id}`),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "myProducts",
        element: (
          <AdminRoute>
            <MyProducts></MyProducts>
          </AdminRoute>
        ),
      },
      {
        path: "updateProduct/:id",
        element: (
          <AdminRoute>
            <UpdateProduct></UpdateProduct>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiUrl}/products/${params.id}`),
      },
      {
        path: "addProduct",
        element: (
          <AdminRoute>
            <AddProduct></AddProduct>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
