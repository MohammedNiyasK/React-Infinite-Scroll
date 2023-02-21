import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import { useContext } from "react";
import { UserContext } from "./Components/Context/LoginContext";

function App() {
  const { isLogin } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {isLogin && <Route path="home" element={<HomePage />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
