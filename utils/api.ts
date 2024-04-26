export const fetchData = async <T>(
	to: string,
	queryParams?: string,
): Promise<T> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}${to}${queryParams ? queryParams : ''}`,
		);
		return await response.json();
	} catch (err) {
		throw new Error('Shit happens nvm');
	}
};
