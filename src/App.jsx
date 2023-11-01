import { RouterProvider } from "react-router-dom";
import Router from "./routes/router";

function App() {
  const router = Router();

  return <RouterProvider router={router} />;
}

export default App;
