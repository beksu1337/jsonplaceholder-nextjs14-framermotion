import { SingleItemInfo } from '@/components/single-item-info';
import { fetchData } from '@/utils/api';
import { DataTuple, UserModel } from '@/utils/types';

export async function generateStaticParams() {
	const users = await fetchData<UserModel[]>('users');

	return users.map((user) => ({
		userId: user.id.toString(),
	}));
}

export const dynamicParams = false;

interface Props {
	params: {
		userId: string;
	};
}

export default async function Page({ params: { userId } }: Props) {
	const singleUser = await fetchData<UserModel>(`users/${userId}`);

	const data = Object.entries(singleUser) as DataTuple<UserModel>[];

	return (
		<div className="container">
			<h1 className="pl-10 pt-10 font-bold uppercase">Пользователь</h1>
			<SingleItemInfo data={data} />
		</div>
	);
}
