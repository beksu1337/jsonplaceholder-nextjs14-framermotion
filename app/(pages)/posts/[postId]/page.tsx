import { SingleItemInfo } from '@/components/single-item-info';
import { fetchData } from '@/utils/api';
import { DataTuple, PostModel } from '@/utils/types';

export async function generateStaticParams() {
	const posts = await fetchData<PostModel[]>('posts');

	return posts.map((post) => ({
		postId: post.id.toString(),
	}));
}

export const dynamicParams = false;

interface Props {
	params: {
		postId: string;
	};
}

export default async function Page({ params: { postId } }: Props) {
	const singlePost = await fetchData<PostModel>(`posts/${postId}`);

	const data = Object.entries(singlePost) as DataTuple<PostModel>[];

	return (
		<div className="container">
			<h1 className="pl-10 pt-10 font-bold uppercase">Пост</h1>
			<SingleItemInfo data={data} />
		</div>
	);
}
