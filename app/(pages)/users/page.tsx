import { fetchData } from '@/utils/api';
import { UserModel } from '@/utils/types';

export default async function Page() {
	const data = await fetchData<UserModel>('users');

	return (
		<div className="container mb-5">
			<h1 className="font-bold text-center my-5">Пользователи</h1>
			<div className="flex flex-col gap-3">
				{data.map((user) => (
					<div
						key={user.id}
						className="flex p-2 flex-col border border-pink-500"
					>
						<h4>
							<span className="text-red-500 font-bold">
								Имя:{' '}
							</span>
							{user.name}
						</h4>
						<h4>
							<span className="text-red-500 font-bold">
								Телефон:{' '}
							</span>
							{user.phone}
						</h4>
						<div>
							<span className="text-red-500 font-bold">
								Никнейм:{' '}
							</span>
							{user.username}
						</div>
						<div>
							<span className="text-red-500 font-bold">
								Веб-сайт:{' '}
							</span>
							{user.website}
						</div>
						<div>
							<span className="text-red-500 font-bold">
								Компания:{' '}
							</span>
							{user.company.name}
						</div>
						<div>
							<span className="text-red-500 font-bold">
								Город:{' '}
							</span>
							{user.address.city}
						</div>
						<div>
							<span className="text-red-500 font-bold">
								Улица:{' '}
							</span>
							{user.address.street}
						</div>
						<div>
							<span className="text-red-500 font-bold">
								Координаты:{' '}
							</span>
							{user.address.geo.lat} {user.address.geo.lng}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
