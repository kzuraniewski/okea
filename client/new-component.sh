cd src/components

# Append export to src/components/index.ts
touch index.ts
TEXT="
export * from \"./$1\";
export { default as $1 } from \"./$1\";"
printf '%s\n' "$TEXT" >>index.ts

# Create new empty component template
mkdir $1
cd $1

# index.ts
touch index.ts
TEXT="import $1 from \"./$1\";

export * from \"$1.types.d\";
export default $1;"
printf '%s\n' "$TEXT" >>index.ts

# <Component>.tsx
touch $1.tsx
TEXT="import React from \"react\";
import { Root } from \"./$1.style\";
import { type $1Props } from \"./$1.types.d\";

const $1 = ({}: $1Props) => {
	return <Root></Root>;
};

export default $1;"
printf '%s\n' "$TEXT" >>$1.tsx

# <Component>.style.ts
touch $1.style.ts
TEXT="import styled from \"styled-components\";

export const Root = styled.div\`\`;"
printf '%s\n' "$TEXT" >>$1.style.ts

# <Component>.types.d.ts
touch $1.types.d.ts
TEXT="export type $1Props = {};"
printf '%s\n' "$TEXT" >>$1.types.d.ts
