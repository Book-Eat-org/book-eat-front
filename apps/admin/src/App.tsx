import "@book-eat/ui/dist/style.css";
import NewAdminPage from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "@book-eat/ui";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

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
