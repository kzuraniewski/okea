import React from "react";
import { Links, NavLink, Root } from "./Header.style";
import { type HeaderProps } from "./Header.types.d";

const Header = ({}: HeaderProps) => {
	return (
		<Root>
			<nav>
				<Links>
					<li>
						<NavLink href="/">Home</NavLink>
					</li>
					<li>
						<NavLink href="/">Link 1</NavLink>
					</li>
					<li>
						<NavLink href="/">Link 2</NavLink>
					</li>
					<li>
						<NavLink href="/">Link 3</NavLink>
					</li>
				</Links>
			</nav>
		</Root>
	);
};

export default Header;
