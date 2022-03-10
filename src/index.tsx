import React from "react"
import ReactDOM from "react-dom"
import "the-new-css-reset"
import "./index.css"
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./features/app/App"
import { store } from "./app/store"
import Result from "./features/result/Result"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="result" element={<Result />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
)
