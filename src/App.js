import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MechanicPage from "./pages/MechanicPage";
import ProtectedRoutes from "./components/ProdectedRoutes";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mechanic/:id" element={<MechanicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
