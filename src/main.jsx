// import { StrictMode } from 'react'
import React from "react";
import ReactDom from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import QrCodegenerator from "./Components/Generate/QrCodegenerator.jsx";
import QrCodeScanner from "./Components/Scan/QrCodeScanner.jsx";
// import Navigation from "./Navigation.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
//   {
//     path: "/generator",
//     element: <QrCodegenerator />,
//   },
//   {
//     path: "/scunner",
//     element: <QrCodeScanner />,
//   },
// ]);

ReactDom.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
    {/* <QrCodegenerator />
    <QrCodeScanner /> */}
    {/* <Layout /> */}
  </>
);
