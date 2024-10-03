import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./Root";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import HotProduct from "./components/HotProduct";
import NewArrival from "./components/NewArrival";
import Trending from "./components/Trending";
import OnSale from "./components/OnSale";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/signup" element={<SignIn />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      {/* <Route path="/hotproduct" element={<HotProduct />}></Route>
      <Route path="/newarrival" element={<NewArrival />}></Route>
      <Route path="/trendingproduct" element={<Trending />}></Route>
      <Route path="/onsale" element={<OnSale />}></Route> */}
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
