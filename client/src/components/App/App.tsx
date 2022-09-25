import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Reset from "./reset";
import theme from "./theme";

const Root = styled.div``;

const App = () => {
	return (
		<>
			<Reset />
			<ThemeProvider theme={theme}>
				<Root />
			</ThemeProvider>
		</>
	);
};

export default App;
