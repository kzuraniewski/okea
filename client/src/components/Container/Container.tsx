import React from "react";
import { Root } from "./Container.style";
import { type ContainerProps } from "./Container.types.d";

const Container = ({ children }: ContainerProps) => {
	return <Root>{children}</Root>;
};

export default Container;
