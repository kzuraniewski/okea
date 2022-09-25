import React from "react";
import { Outlet } from "react-router-dom";
import { Root } from "./Layout.style";

const Layout = () => {
	return (
		<Root>
			<Outlet />
		</Root>
	);
};

export default Layout;
