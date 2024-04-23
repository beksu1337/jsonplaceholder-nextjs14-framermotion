import { fetchData } from '@/utils/api';
import { TodoModel } from '@/utils/types';

export default async function Page() {
	const data = await fetchData<TodoModel>('todos');

	return (
		<div className="container mb-5">
			<h1 className="font-bold text-center my-5">Туду</h1>
			<div className="flex flex-col gap-3">
				{data.map((todo) => (
					<div
						key={todo.id}
						className="flex p-2 flex-col border border-pink-500"
					>
						<h4>
							<span className="text-red-500 font-bold">
								Выполнено:{' '}
							</span>
							{todo.completed ? 'Да' : 'Нет'}
						</h4>
						<h4>
							<span className="text-red-500 font-bold">
								Название:{' '}
							</span>
							{todo.title}
						</h4>
						<div>
							<span className="text-red-500 font-bold">
								Пользователь:{' '}
							</span>
							{todo.userId}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
