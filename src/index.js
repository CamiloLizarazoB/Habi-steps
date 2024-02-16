import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { DialogProvider } from "./app/providers/dialog.provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DialogProvider>
        <App />
      </DialogProvider>
    </Provider>
  </React.StrictMode>
);
