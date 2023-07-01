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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "purchasedProducts",
        element: <PurchasedProducts></PurchasedProducts>,
      },
      {
        path: "paymentCheckout/:id",
        element: <PaymentCheckout></PaymentCheckout>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiUrl}/purchases/${params.id}`),
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;
