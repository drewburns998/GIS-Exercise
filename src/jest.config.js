import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import "babel-polyfill";
window.render = render;
window.fireEvent = fireEvent;
window.wait = wait;
