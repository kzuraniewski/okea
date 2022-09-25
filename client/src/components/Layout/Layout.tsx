import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";
import { Root } from "./Layout.style";

const Layout = () => {
	return (
		<Root>
			<Header />
			<Outlet />
		</Root>
	);
};

export default Layout;
