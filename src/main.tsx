import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { AppContextProvider } from "./context/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </Provider>
  </React.StrictMode>
);
