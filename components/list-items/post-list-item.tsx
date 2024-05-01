'use client';
import Link from 'next/link';
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion';
import { PostModel } from '@/utils/types';
import { Tooltip } from '../tooltip';

interface Props extends PostModel {
	index: number;
}

const titleAnimateVariants: Variants = {
	initial: {
		opacity: 0,
		x: 50,
	},
	animate: (index) => ({
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			bounce: 0,
			// delay: index * 0.03,
		},
	}),
};

const userAnimateVariants: Variants = {
	start: {
		opacity: 0,
		x: 50,
	},
	end: {
		opacity: 1,
		x: 0,
		transition: { type: 'spring', bounce: 0, delay: 0.2 },
	},
};

export const PostListItem = ({ title, id, userId, index }: Props) => {
	return (
		<div className="flex p-2 flex-col border border-gray-500">
			<LazyMotion features={domAnimation}>
				<m.h4
					variants={titleAnimateVariants}
					initial="initial"
					whileInView="animate"
					custom={index}
				>
					<span className="text-red-500 font-bold">Название: </span>
					{title}
				</m.h4>
				<m.div
					variants={userAnimateVariants}
					whileInView="end"
					initial="start"
				>
					<span className="text-red-500 font-bold">
						Пользователь:{' '}
					</span>
					{userId}
				</m.div>

				<Link
					href={`/posts/${id}`}
					className="underline ml-auto text-pink-500 relative"
				>
					<Tooltip>
						<m.span
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: 1,
								transition: { duration: 0.8 },
							}}
						>
							Подробнее
						</m.span>
					</Tooltip>
				</Link>
			</LazyMotion>
		</div>
	);
};
