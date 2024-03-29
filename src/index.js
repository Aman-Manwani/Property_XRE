// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import App from "./App";
// import { store } from "./store";
// import { Provider } from "react-redux";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Provider store={store}>
//         {" "}
//         <App />{" "}
//       </Provider>
//     ),
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);
import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);