import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetail from "./components/pokemonDetail/PokemonDetail";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "pokemon/:pokemonName",
        element: <PokemonDetail />
      },
    ],
  },

])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
