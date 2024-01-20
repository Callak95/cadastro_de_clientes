import { FC } from "react";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./features";

const App: FC = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
