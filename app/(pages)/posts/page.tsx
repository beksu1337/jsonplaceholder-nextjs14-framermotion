import { PostListItem } from '@/components/list-items/post-list-item';
import { fetchData } from '@/lib/services';
import { PostModel } from '@/lib/types';
import Link from 'next/link';

export const runtime = 'edge';

export default async function Page() {
	const data = await fetchData<PostModel[]>('posts');

	return (
		<div className="container mb-5  bg-gradient-to-r pb-4 from-cyan-300 to-amber-300	">
			<div className="flex justify-between items-center pl-14">
				<h1 className="font-bold text-center my-5 pt-2">Посты</h1>
				<Link
					href="posts/new-post"
					prefetch={false}
					className="rounded-lg px-3 py-1 text-sky-100 bg-sky-500"
				>
					Создать новый
				</Link>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				{data.map((post, i) => (
					<PostListItem key={post.id} {...post} index={i} />
				))}
			</div>
		</div>
	);
}
