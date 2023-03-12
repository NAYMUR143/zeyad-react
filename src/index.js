import "./styles/globals.css";
import "./styles/swiper.styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/index";
import Classic24kHoddieSignatureEditrion from "./pages/product/Classic24kHoddieSignatureEditrion";
import ClassicMafiaHoddie from "./pages/product/ClassicMafiaHoddie";
import ClassicMafiaLongSleave from "./pages/product/ClassicMafiaLongSleave";
import ClassicMafiaTee from "./pages/product/ClassicMafiaTee";
import Classsic24ktTee from "./pages/product/Classsic24ktTee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/Classic24kHoddieSignatureEditrion",
    element: <Classic24kHoddieSignatureEditrion />,
  },
  {
    path: "/product/ClassicMafiaHoddie",
    element: <ClassicMafiaHoddie />,
  },
  {
    path: "/product/ClassicMafiaLongSleave",
    element: <ClassicMafiaLongSleave />,
  },
  {
    path: "/product/ClassicMafiaTee",
    element: <ClassicMafiaTee />,
  },
  {
    path: "/product/Classsic24ktTee",
    element: <Classsic24ktTee />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
