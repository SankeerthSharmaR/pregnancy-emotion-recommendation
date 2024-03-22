import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "views/Login.js";
import SignUp from "views/SignUp";
import ForgotPwd from "views/ForgotPwd";
import HomePage from "views/HomePage";
import ChatScreen from "views/ChatScreen";
import Profile from "views/Profile";
import axiosInstance from "utils/axios";

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (
			token &&
			!config.url.includes("/login") &&
			!config.url.includes("/signup")
		) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Navigate to='/home' />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<SignUp />}
				/>
				<Route
					path='/forgot'
					element={<ForgotPwd />}
				/>
				<Route
					path='/home'
					element={<HomePage />}
				/>
				<Route
					path='/chat'
					element={<ChatScreen />}
				/>
				<Route
					path='/profile'
					element={<Profile />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
