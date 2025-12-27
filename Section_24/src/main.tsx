import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import SearchStudent from "./pages/SearchStudent.tsx";
import PackageList from "./pages/PackageList.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/search", element: <SearchStudent /> },
      { path: "/package", element: <PackageList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
