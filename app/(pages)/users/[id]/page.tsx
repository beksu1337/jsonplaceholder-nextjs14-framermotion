import { SingleItemInfo } from '@/components/single-item-info';
import { fetchData } from '@/lib/services';
import { Tuple, UserModel } from '@/lib/types';

export async function generateStaticParams() {
	const users = await fetchData<UserModel[]>('users');

	return users.map((user) => ({
		id: user.id.toString(),
	}));
}

export const dynamicParams = false;

interface Props {
	params: {
		id: string;
	};
}

export default async function Page({ params: { id } }: Props) {
	const singleUser = await fetchData<UserModel>(`users/${id}`);

	const data = Object.entries(singleUser) as Tuple<UserModel>;

	return (
		<div className="container">
			<h1 className="pl-10 pt-10 font-bold uppercase">Пользователь</h1>
			<SingleItemInfo data={data} />
		</div>
	);
}
