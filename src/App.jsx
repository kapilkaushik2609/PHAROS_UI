import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainDashboard from "./components/common/MainDashboard";
import HeatMap from "./pages/HeatMap";
// ✅ import HeatMap

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("ems_token");
  return token ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainDashboard />
            </ProtectedRoute>
          }
        />
        {/* ✅ New HeatMap Route */}
        <Route
          path="/heatmap"
          element={
            <ProtectedRoute>
              <HeatMap />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
