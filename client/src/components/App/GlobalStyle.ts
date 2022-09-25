import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		color: ${({ theme }) => theme.colors.text.dark};
		background-color: ${({ theme }) => theme.colors.primary.main};
		font-family: 'Noto Sans', sans-serif;
	}

	a {
		color: ${({ theme }) => theme.colors.accent};
	}
`;

export default GlobalStyle;
