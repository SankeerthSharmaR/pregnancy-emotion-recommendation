// // import logo from './logo.svg';
// import './App.css';

// import "@fortawesome/fontawesome-free/css/all.min.css";

// import Login from "views/Login.js";
// import SignUp from 'views/SignUp';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <Login/>
//     // <SignUp/>
//   );
// }

// export default App;

import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "views/Login.js";
import SignUp from "views/SignUp";
import "./App.css";
import ForgotPwd from "views/ForgotPwd";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Navigate to='/login' />}
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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
