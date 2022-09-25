import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Header } from "..";
import { Content } from "./Layout.style";

const Layout = () => {
	return (
		<>
			<Header />
			<Content>
				<Container>
					<Outlet />
				</Container>
			</Content>
		</>
	);
};

export default Layout;
