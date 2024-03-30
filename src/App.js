import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import AppRoutes from "routes";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Alert from "components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const handleCloseAlert = () => {
    setAlert(null);
  };

  return (
    <div className="w-full h-full gradient-background relative">
      <Navbar />
      <Alert
        message={alert?.message}
        type={alert?.type}
        onClose={handleCloseAlert}
      />
      <AppRoutes showAlert={(message, type) => setAlert({ message, type })} />
      <Footer />
    </div>
  );
}

export default App;
