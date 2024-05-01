import { PostListItem } from '@/components/list-items/post-list-item';
import { fetchData } from '@/utils/api';
import { PostModel } from '@/utils/types';

export const runtime = 'edge';

export default async function Page() {
	const data = await fetchData<PostModel[]>('posts');

	return (
		<div className="container mb-5 h-max">
			<h1 className="font-bold text-center my-5">Посты</h1>

			<div className="flex flex-col gap-3">
				{data.map((post, i) => (
					<PostListItem key={post.id} {...post} index={i} />
				))}
			</div>
		</div>
	);
}
