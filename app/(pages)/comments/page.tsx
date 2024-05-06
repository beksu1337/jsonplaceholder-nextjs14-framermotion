import { CommentListItem } from '@/components/list-items/comment-list-item';
import { fetchData } from '@/lib/services';
import { CommentModel } from '@/lib/types';
import Link from 'next/link';

export const runtime = 'edge';

export default async function Page() {
	const data = await fetchData<CommentModel[]>('comments');

	return (
		<div className="container mb-5 pb-4 bg-gradient-to-r from-emerald-300 via-teal-300 to-lime-300">
			<div className="flex justify-between items-center pl-14">
				<h1 className="font-bold text-center my-5 pt-2">Коментарии</h1>
				<Link
					href="comments/new-comment"
					prefetch={false}
					className="rounded-lg px-3 py-1 text-sky-100 bg-sky-500"
				>
					Создать новый
				</Link>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				{data.map((comment, i) => (
					<CommentListItem key={comment.id} {...comment} index={i} />
				))}
			</div>
		</div>
	);
}
