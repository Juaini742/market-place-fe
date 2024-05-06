import { Provider } from "react-redux";
import RootRouter from "./router";
import store from "./store/store";
import { AppContextProvider } from "./middleware/AppContext";

function App() {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <RootRouter />
      </AppContextProvider>
    </Provider>
  );
}

export default App;
