import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}> </RouterProvider>;
    </Provider>
  );
}

export default App;
