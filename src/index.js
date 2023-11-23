import { createRoot } from "react-dom"
import React from 'react';
import App from "./App";
import "./global.css";
import Home from "./Home/Home";
import User from "./user/User";
import { BrowserRouter } from "react-router-dom";
import Check from "./Check";

createRoot(document.getElementById("root")).render(
    <User />
)