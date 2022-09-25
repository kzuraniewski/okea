import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";
import { Content } from "./Layout.style";

const Layout = () => {
	return (
		<>
			<Header />
			<Content>
				<Outlet />
			</Content>
		</>
	);
};

export default Layout;
