import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form, NavBar, Home } from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Links() {
	return (
		<>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<NavBar />}>
					<Route index element={<Home />} />
					<Route path='transcript_form' element={<Form />} />
				</Route>
			</Routes>
		</BrowserRouter>
		</>
	);
		
}
ReactDOM.render(<Links />, document.getElementById('root'));

reportWebVitals();