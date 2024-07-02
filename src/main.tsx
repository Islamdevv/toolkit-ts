import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReduxProvider from "./providers/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
