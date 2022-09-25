import "styled-components";

type ColorProperties = Record<"main" | "light" | "dark", string>;

type TextProperties = Record<"light" | "dark", string>;

type Colors = {
	primary: ColorProperties;
	secondary: ColorProperties;
	accent: string;
	text: TextProperties;
};

type Shadow = {
	light: string;
	string: string;
};

declare module "styled-components" {
	export interface DefaultTheme {
		colors: Colors;
		shadow: Shadow;
	}
}
