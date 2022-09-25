import styled from "styled-components";

export const Root = styled.header`
	position: sticky;
	width: 100vw;
	background-color: ${({ theme }) => theme.colors.primary.light};
	box-shadow: ${({ theme }) => theme.shadow.light};
`;

export const Links = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 20px 30px;
`;

export const NavLink = styled.a`
	color: ${({ theme }) => theme.colors.text.dark};
	font-size: 1.2rem;
	text-decoration: none;
	text-transform: uppercase;
	transition: 0.15s color;

	&:hover {
		color: ${({ theme }) => theme.colors.accent};
	}
`;
