import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./store"


ReactDOM.render(
<div>
    <Provider store={store}>
     <App></App>
    </Provider>
</div>, document.getElementById("root"));



