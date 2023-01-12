import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

import { rootStore } from "./Logic/rootStore";
import Routing from "./Routing";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(far, fas);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Provider>
);
