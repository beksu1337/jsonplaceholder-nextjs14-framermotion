import { UserListItem } from '@/components/list-items/user-list-item';
import { fetchData } from '@/utils/api';
import { UserModel } from '@/utils/types';
import Link from 'next/link';

export default async function Page() {
	const data = await fetchData<UserModel[]>('users');

	return (
		<div className="container mb-5">
			<h1 className="font-bold text-center my-5">Пользователи</h1>
			<div className="flex flex-col gap-3">
				{data.map((user, i) => (
					<UserListItem key={user.id} {...user} index={i} />
				))}
			</div>
		</div>
	);
}
