import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import PaymentSuccess from "./Pages/Payment/PaymentSuccess";
import PaymentFailure from "./Pages/Payment/PaymentFailure";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/men",
          element: <Products type="men" />,
        },
        {
          path: "/products/women",
          element: <Products type="women" />,
        },
        {
          path: "/products/find/:id",
          element: <Product />,
        },
        {
          path: "/success",
          element: <PaymentSuccess />,
        },
        {
          path: "/failure",
          element: <PaymentFailure />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
