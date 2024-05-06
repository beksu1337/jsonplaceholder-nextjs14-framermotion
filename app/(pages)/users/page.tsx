import { UserListItem } from '@/components/list-items/user-list-item';
import { fetchData } from '@/lib/services';
import { UserModel } from '@/lib/types';
import Link from 'next/link';

export default async function Page() {
	const data = await fetchData<UserModel[]>('users');

	return (
		<div className="container mb-5 bg-gradient-to-r py-5 from-slate-300 pb-4 to-green-300">
			<h1 className="font-bold text-center mb-5 text-black p-2">
				Пользователи
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
				{data.map((user, i) => (
					<UserListItem key={user.id} {...user} index={i} />
				))}
			</div>
		</div>
	);
}
