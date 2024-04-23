import { fetchData } from '@/utils/api';
import { PostModel } from '@/utils/types';

export default async function Page() {
	const data = await fetchData<PostModel>('posts');

	return (
		<div className="container mb-5">
			<h1 className="font-bold text-center my-5">Посты</h1>
			<div className="flex flex-col gap-3">
				{data.map((post) => (
					<div
						key={post.id}
						className="flex p-2 flex-col border border-pink-500"
					>
						<h4>
							<span className="text-red-500 font-bold">
								Название:{' '}
							</span>
							{post.title}
						</h4>
						<div>
							<span className="text-red-500 font-bold">
								Пользователь:{' '}
							</span>
							{post.userId}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
