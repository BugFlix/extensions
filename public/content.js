import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 삽입할 컨테이너 생성
const container = document.createElement("div");
container.id = "Weblog-extension";
document.body.appendChild(container);

// React 컴포넌트 렌더링
ReactDOM.render(<App />, container);
