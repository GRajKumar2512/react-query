import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Products from "./Products.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Parallel from "./Parallel.jsx";
import Optimistic from "./Optimistic.jsx";
import Dependant from "./Dependant.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "paginated",
    element: <Products />,
  },
  {
    path: "parallel",
    element: <Parallel />,
  },
  {
    path: "optimistic",
    element: <Optimistic />,
  },
  {
    path: "dependant",
    element: <Dependant />,
  },
]);

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
