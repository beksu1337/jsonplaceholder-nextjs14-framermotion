import { SingleItemInfo } from '@/components/single-item-info';
import { fetchData } from '@/lib/services';
import { Tuple, TodoModel } from '@/lib/types';

export async function generateStaticParams() {
	const todos = await fetchData<TodoModel[]>('todos');

	return todos.map((todo) => ({
		id: todo.id.toString(),
	}));
}

export const dynamicParams = false;

interface Props {
	params: {
		id: string;
	};
}

export default async function Page({ params: { id } }: Props) {
	const singleTodo = await fetchData<TodoModel>(`todos/${id}`);

	const data = Object.entries(singleTodo) as Tuple<TodoModel>;

	return (
		<div className="container">
			<h1 className="pl-10 pt-10 font-bold uppercase">Туду</h1>
			<SingleItemInfo data={data} />
		</div>
	);
}
