import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { CircularProgress } from "@mui/material";
// import Home from "../pages/Home";

const Home = React.lazy(() => import("../pages/Home"));
const Contact = React.lazy(() => import("../pages/Contact"));

const AppRouters = () => {
  // const _route = [
  //   {
  //     path: "/contact",
  //     component: Contact,
  //   },
  // ];

  return (
    <React.Suspense fallback={<CircularProgress disableShrink />}>
      <Routes>
        {/* <Route path="/" element={<Home />}>
          {_route.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Route> */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRouters;
