import { SingleItemInfo } from '@/components/single-item-info';
import { fetchData } from '@/utils/api';
import { CommentModel, DataTuple } from '@/utils/types';

export async function generateStaticParams() {
	const comments = await fetchData<CommentModel[]>('comments');

	return comments.map((comment) => ({
		commentId: comment.id.toString(),
	}));
}

export const dynamicParams = false;

interface Props {
	params: {
		commentId: string;
	};
}

export default async function Page({ params: { commentId } }: Props) {
	const singleComment = await fetchData<CommentModel>(
		`comments/${commentId}`,
	);

	const data = Object.entries(singleComment) as DataTuple<CommentModel>[];

	return (
		<div className="container">
			<h1 className="pl-10 pt-10 font-bold uppercase">Комментарий</h1>
			<SingleItemInfo data={data} />
		</div>
	);
}
