'use client';

import { CreatePostForm } from '@/components/forms/create-post-form';
import { NewEntity } from '@/components/new-entity';
import { PostModel } from '@/lib/types';
import { useState } from 'react';

export default function NewPost() {
	const [newPost, setNewPost] = useState<[string, any][]>([]);

	const handleData = (post: PostModel) => {
		const data = Object.entries(post);
		setNewPost(data);
	};

	return (
		<section className="bg-slate-300 p-5 mt-5">
			<h1 className="text-center mb-4">Новый пост</h1>
			<div className="flex items-center justify-between">
				<CreatePostForm handleData={handleData} />
				{!!newPost.length && <NewEntity entity={newPost} />}
			</div>
		</section>
	);
}
