import { Provider } from "react-redux";
import AppRoutes from "./src/routes";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}