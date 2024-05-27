import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./components/Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
