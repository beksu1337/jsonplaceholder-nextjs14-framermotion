import { CommentModel, Urls } from './types';

export const fetchData = async <T>(
	to: Urls,
	queryParams?: string,
): Promise<T[]> => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${to}`);
		return await response.json();
	} catch (err) {
		throw new Error('Shit happens nvm');
	}
};
