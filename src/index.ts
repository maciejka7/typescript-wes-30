import "./styles/globals.css";
import { One } from "./components/one";

import { Tooltip } from "./utils/tooltip";

console.log(One.sayHello());

const element = document.querySelector("aside nav ul li:nth-child(5)");

const tooltip = new Tooltip(element);
