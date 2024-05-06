export const fetchData = async <T>(to: string): Promise<T> => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${to}`);
		return await response.json();
	} catch (err) {
		throw new Error('Ошибка при получении данных');
	}
};
