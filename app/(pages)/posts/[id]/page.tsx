import { SingleItemInfo } from '@/components/single-item-info';
import { fetchData } from '@/lib/utils';
import { Tuple, PostModel } from '@/lib/types';

export async function generateStaticParams() {
	const posts = await fetchData<PostModel[]>('posts');

	return posts.map((post) => ({
		id: post.id.toString(),
	}));
}

export const dynamicParams = false;

interface Props {
	params: {
		id: string;
	};
}

export default async function Page({ params: { id } }: Props) {
	const singlePost = await fetchData<PostModel>(`posts/${id}`);

	const data = Object.entries(singlePost) as Tuple<PostModel>;

	return (
		<div className="container">
			<h1 className="pl-10 pt-10 font-bold uppercase">Пост</h1>
			<SingleItemInfo data={data} />
		</div>
	);
}
