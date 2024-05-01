import { TodoListItem } from '@/components/list-items/todo-list-item';
import { fetchData } from '@/utils/api';
import { TodoModel } from '@/utils/types';

export const runtime = 'edge';

export default async function Page() {
	const data = await fetchData<TodoModel[]>('todos');

	return (
		<div className="container mb-5">
			<h1 className="font-bold text-center my-5">Тудусы</h1>
			<div className="flex flex-col gap-3">
				{data.map((todo, i) => (
					<TodoListItem key={todo.id} {...todo} index={i} />
				))}
			</div>
		</div>
	);
}
