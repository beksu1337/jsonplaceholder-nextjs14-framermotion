'use client';

import { CommentModel } from '@/utils/types';
import { m, Variants, domAnimation, LazyMotion } from 'framer-motion';
import Link from 'next/link';

interface Props extends CommentModel {
	index: number;
}

const titleAnimateVariants: Variants = {
	start: {
		opacity: 0,
		y: -50,
	},

	end: {
		opacity: 1,
		y: 0,
		transition: {
			// bounce: 0,
			ease: 'easeIn',
			duration: 0.5,
		},
	},
};

const userAnimateVariants: Variants = {
	userStart: {
		opacity: 0,
		y: -50,
	},
	userEnd: {
		opacity: 1,
		y: 0,
		transition: {
			bounce: 0,
			delay: 0.5,
		},
	},
};

export const CommentListItem = ({ index, body, email, id }: Props) => {
	return (
		<div key={id} className="flex p-2 flex-col border border-pink-500">
			<LazyMotion features={domAnimation}>
				<m.h4
					initial="start"
					whileInView="end"
					variants={titleAnimateVariants}
				>
					<span className="text-red-500 font-bold">Содержание: </span>
					{body}
				</m.h4>
				<m.div
					variants={userAnimateVariants}
					initial="userStart"
					whileInView="userEnd"
				>
					<span className="text-red-500 font-bold">
						Пользователь:{' '}
					</span>
					{email}
				</m.div>
				<Link
					href={`/comments/${id}`}
					className="underline text-right text-pink-500"
				>
					Подробнее
				</Link>
			</LazyMotion>
		</div>
	);
};
