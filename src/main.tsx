import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/Theme.styles";
import { GlobalStyle } from "./styles/Global.styles";

import PageError from "./routes/error/error";
import PageContato from "./routes/contato/contato";
import PageHome from "./routes/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
    errorElement: <PageError />,
  },
  {
    path: "/contato",
    element: <PageContato />,
    errorElement: <PageError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
