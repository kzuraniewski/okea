import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Layout from "./components/Layout";
import { Home, NotFound } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<App>
			<RouterProvider router={router} />
		</App>
	</React.StrictMode>
);
