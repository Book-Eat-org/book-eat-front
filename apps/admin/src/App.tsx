import "@book-eat/ui/dist/style.css";
import NewAdminPage from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "@book-eat/ui";

import { Notifications } from "./Notifications.tsx";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <UIProvider>
          <Notifications>
            <NewAdminPage />
          </Notifications>
        </UIProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
