import "@book-eat/ui/dist/style.css";
import NewAdminPage from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "@book-eat/ui";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <UIProvider>
          <NewAdminPage />
        </UIProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
