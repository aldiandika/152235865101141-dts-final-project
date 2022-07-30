import "./styles/main-style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import Homepage from "./containers/Homepage";
// import ProtectedComponent from "./components/ProtectedComponent";
import LoadingPage from "./containers/LoadingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<Homepage />} />

        {/* Login and register */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />

        {/* Protected Route */}
        {/* <Route
          path="/catch-pokemon/:id"
          element={
            <ProtectedComponent>
              // Catch pokemon page
            </ProtectedComponent>
          }
        />
         <Route
          path="/my-pokemon/:id"
          element={
            <ProtectedComponent>
              // My pokemon page
            </ProtectedComponent>
          }
        />
        <Route
          path="/my-pokemon/"
          element={
            <ProtectedComponent>
              // My pokemon page
            </ProtectedComponent>
          }
        /> */}

        {/* Loading page */}
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
