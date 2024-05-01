'use client';

import { CommentModel } from '@/utils/types';
import { m, Variants, domAnimation, LazyMotion } from 'framer-motion';
import Link from 'next/link';
import { Tooltip } from '../tooltip';

interface Props extends CommentModel {
	index: number;
}

const titleVariants: Variants = {
	start: {
		opacity: 0,
		y: -50,
	},
	end: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			// bounce: 0,
			ease: 'easeIn',
			duration: 0.2,
			delay: i * 0.05,
			repeat: 0,
		},
	}),
};

const userVariants: Variants = {
	userStart: {
		opacity: 0,
		y: -50,
	},
	userEnd: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			bounce: 0,
			delay: i * 0.1,
			repeat: 0,
		},
	}),
};

export const CommentListItem = ({ index, body, email, id }: Props) => {
	return (
		<LazyMotion features={domAnimation}>
			<div key={id} className="flex p-2 flex-col border border-pink-500">
				<m.h4
					initial="start"
					whileInView="end"
					variants={titleVariants}
					custom={index}
					viewport={{ once: true }}
				>
					<span className="text-red-500 font-bold">Содержание: </span>
					{body}
				</m.h4>
				<m.div
					variants={userVariants}
					initial="userStart"
					whileInView="userEnd"
					custom={index}
					viewport={{ once: true }}
				>
					<span className="text-red-500 font-bold">
						Пользователь:{' '}
					</span>
					{email}
				</m.div>
				<Link
					href={`/comments/${id}`}
					className="underline ml-auto text-right text-pink-500"
				>
					<Tooltip>Подробнее</Tooltip>
				</Link>
			</div>
		</LazyMotion>
	);
};
