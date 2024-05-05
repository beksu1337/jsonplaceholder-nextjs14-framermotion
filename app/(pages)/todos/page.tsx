import { TodoListItem } from '@/components/list-items/todo-list-item';
import { fetchData } from '@/lib/utils';
import { TodoModel } from '@/lib/types';

export const runtime = 'edge';

export default async function Page() {
	const data = await fetchData<TodoModel[]>('todos');

	return (
		<div className="container mb-5 bg-gradient-to-r py-5 from-fuchsia-300 pb-4 to-sky-300">
			<h1 className="font-bold text-center text-black mb-5 pt-2">
				Тудусы
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				{data.map((todo, i) => (
					<TodoListItem key={todo.id} {...todo} index={i} />
				))}
			</div>
		</div>
	);
}
