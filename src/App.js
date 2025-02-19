import "./styles/main-style.css";
import "./styles/loading-style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import Homepage from "./containers/Homepage";
// import ProtectedComponent from "./components/ProtectedComponent";
import LoadingPage from "./containers/LoadingPage";
import LostPage from "./containers/404_page";
import RegisterPage from "./containers/RegisterPage";
import PokemonDetailPage from "./containers/Pokemon_detailPage";
import PokemonCatchPage from "./containers/Pokemon_catchPage";
import ProtectedComponent from "./components/ProtectedComponent";
import MyPokemonPage from "./containers/MyPokemon_page";
import PokemonListGen from "./containers/Pokemon_list_gen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<PokemonDetailPage />} />
        <Route path="/generation/:id" element={<PokemonListGen />} />

        {/* Login and register */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Route */}
        <Route
          path="/catch-pokemon/:id"
          element={
            <ProtectedComponent>
              <PokemonCatchPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="/my-pokemon/"
          element={
            <ProtectedComponent>
              <MyPokemonPage />
            </ProtectedComponent>
          }
        />

        {/* Loading page */}
        {/* <Route path="/loading" element={<LoadingPage />} /> */}

        {/* 404 Page */}
        <Route path="/*" element={<LostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
