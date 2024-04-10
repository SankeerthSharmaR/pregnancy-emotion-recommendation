import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import AppRoutes from "routes";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Alert from "components/Alert";

function App() {
	const [alert, setAlert] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("username");
		if (storedUser) {
			setUser({
				name: storedUser,
				profilePic: "https://randomuser.me/api/portraits/med/men/75.jpg",
			});
		}
	}, []);
	const handleCloseAlert = () => {
		setAlert(null);
	};
	const handleLogout = () => {
		localStorage.removeItem("username");
		localStorage.removeItem("token");
		setUser(null);
		setAlert({ message: "Logged out successfully!", type: "success" });
	};

	return (
		<div className="w-full h-full gradient-background relative">
			<Navbar user={user} handleLogout={handleLogout} />
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
