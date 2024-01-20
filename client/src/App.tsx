import { FC } from "react";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./features";
import { GlobalStyle } from "./styles";

const App: FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRoutes />
    </Provider>
  );
};

export default App;
