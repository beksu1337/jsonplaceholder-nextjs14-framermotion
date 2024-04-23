import { fetchData } from '@/utils/api';
import { CommentModel } from '@/utils/types';

export default async function Page() {
	const data = await fetchData<CommentModel>('comments');

	return (
		<div className="container mb-5">
			<h1 className="font-bold text-center my-5">Коментарии</h1>
			<div className="flex flex-col gap-3">
				{data.map((comment) => (
					<div
						key={comment.id}
						className="flex p-2 flex-col border border-pink-500"
					>
						<h4>
							<span className="text-red-500 font-bold">
								Содержание:{' '}
							</span>
							{comment.body}
						</h4>
						<div>
							<span className="text-red-500 font-bold">
								Пользователь:{' '}
							</span>
							{comment.email}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
