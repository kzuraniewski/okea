export const getTest = async () => {
	const resp = await fetch("/test");

	return await resp.text();
};
