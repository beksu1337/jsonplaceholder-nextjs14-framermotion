import { CommentListItem } from '@/components/list-items/comment-list-item';
import { fetchData } from '@/utils/api';
import { CommentModel } from '@/utils/types';

export default async function Page() {
	const data = await fetchData<CommentModel[]>('comments');

	return (
		<div className="container mb-5">
			<h1 className="font-bold text-center my-5">Коментарии</h1>
			<div className="flex flex-col gap-3">
				{data.map((comment, i) => (
					<CommentListItem key={comment.id} {...comment} index={i} />
				))}
			</div>
		</div>
	);
}
