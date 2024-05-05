'use client';

import { CreateCommentForm } from '@/components/forms/create-comment-form';
import { NewEntity } from '@/components/new-entity';
import { CommentModel } from '@/lib/types';
import { useState } from 'react';

export default function NewComment() {
	const [newComment, setNewComment] = useState<[string, any][]>([]);

	const handleData = (comment: CommentModel) => {
		const data = Object.entries(comment);
		setNewComment(data);
	};

	return (
		<section className="bg-zinc-300 p-5 mt-5">
			<h1 className="text-center mb-4">Новый комментарий</h1>
			<div className="flex items-center justify-between">
				<CreateCommentForm handleData={handleData} />
				{!!newComment.length && <NewEntity entity={newComment} />}
			</div>
		</section>
	);
}
