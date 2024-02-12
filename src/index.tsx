import React from "react";
import { createRoot } from "react-dom/client";

import add from "Api";

import NavigationBar from "./App";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(<NavigationBar isIndex />);
console.log(add(100, 1000));