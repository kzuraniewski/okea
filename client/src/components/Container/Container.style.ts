import styled from "styled-components";
import { Breakpoint } from "../../styled";
import { theme } from "../App";

const sizes: Record<keyof typeof theme.breakpoints, number> = {
	sm: 540,
	md: 720,
	lg: 960,
	xl: 1140,
	xxl: 1320,
};

export const Root = styled.div`
	margin: 0 auto;

	${(Object.keys(theme.breakpoints) as Breakpoint[])
		.map(
			(breakpoint) =>
				`@media (min-width: ${theme.breakpoints[breakpoint]}px) { max-width: ${sizes[breakpoint]}px; }`
		)
		.join("")}
`;
