import { SingleItemInfo } from '@/components/single-item-info';
import { fetchData } from '@/lib/utils';
import { CommentModel, Tuple } from '@/lib/types';

export async function generateStaticParams() {
	const comments = await fetchData<CommentModel[]>('comments');

	return comments.map((comment) => ({
		id: comment.id.toString(),
	}));
}

export const dynamicParams = false;

interface Props {
	params: {
		id: string;
	};
}

export default async function Page({ params: { id } }: Props) {
	const singleComment = await fetchData<CommentModel>(`comments/${id}`);

	const data = Object.entries(singleComment) as Tuple<CommentModel>;

	return (
		<div className="container">
			<h1 className="pl-10 pt-10 font-bold uppercase">Комментарий</h1>
			<SingleItemInfo data={data} />
		</div>
	);
}
