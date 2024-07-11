import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import rootRouter from "@/routes";
import { store } from "@/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={rootRouter} />
    </ReduxProvider>
  );
}

export default App;
