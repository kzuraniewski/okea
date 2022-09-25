import "styled-components";

type Color = "primary";

type ColorProperty = "main" | "light" | "dark";

type Colors = Record<Color, Record<ColorProperty, string>>;

declare module "styled-components" {
	export interface DefaultTheme {
		colors: Colors;
	}
}
