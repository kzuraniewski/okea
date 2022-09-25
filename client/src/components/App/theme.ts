import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
	colors: {
		text: {
			light: "#fff",
			dark: "#000",
		},
		primary: {
			main: "#f5f5f5",
			light: "#ffffff",
			dark: "#c2c2c2",
		},
		secondary: {
			main: "#009688",
			light: "#52c7b8",
			dark: "#00675b",
		},
		accent: "orange",
	},
	shadow: {
		light: "rgba(0, 0, 0, 0.12) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
		string: "rgba(0, 0, 0, 0.12) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
	},
};

export default theme;
