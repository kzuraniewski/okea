import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Reset from "./reset";
import theme from "./theme";

const Root = styled.div``;

export type AppProps = {
	children: React.ReactNode;
};

const App = ({ children }: AppProps) => {
	return (
		<>
			<Reset />
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Root>{children}</Root>
			</ThemeProvider>
		</>
	);
};

export default App;
