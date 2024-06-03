import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PhantomScreen from "src/screens/PhantomScreen/PhantomScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "phantoms/:id",
    element: <PhantomScreen />,
  },
]);
