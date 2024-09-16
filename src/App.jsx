import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ManagerPage from "./pages/ManagerPage";
import EmployeePage from "./pages/EmployeePage";
import AddManagerPage from "./pages/AddManagerPage"; // Import the AddManagerPage component
import ProtectedRoute from "./components/ProtectedRoute";
import { fetchItems } from "./api/item";

// Assuming you have a ProtectedRoute component to handle role-based access
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Route for Admin Page */}
        <Route
          path="/admin/add-manager"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AddManagerPage />
            </ProtectedRoute>
          }
        />

        {/* Route for Manager Dashboard */}
        <Route path="/manager" element={<ManagerPage />} />

        {/* Route for Employee Dashboard */}
        <Route path="/employee" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
};

export default App;
