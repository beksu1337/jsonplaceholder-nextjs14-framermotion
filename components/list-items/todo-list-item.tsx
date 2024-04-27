'use client';

import { TodoModel } from '@/utils/types';
import { Variants, m, LazyMotion, domAnimation } from 'framer-motion';
import Link from 'next/link';

interface Props extends TodoModel {
	index: number;
}

const contentAnimateVariant: Variants = {
	start: {
		opacity: 0,
		scale: 0.5,
	},
	end: {
		opacity: 1,
		scale: 1,
		transition: {
			bounce: 0,
		},
	},
};

export const TodoListItem = ({
	index,
	title,
	userId,
	id,
	completed,
}: Props) => {
	return (
		<div className="flex p-2 flex-col border border-pink-500">
			<LazyMotion features={domAnimation}>
				<m.div
					initial="start"
					whileInView="end"
					variants={contentAnimateVariant}
				>
					<h4>
						<span className="text-red-500 font-bold">
							Выполнено:{' '}
						</span>
						{completed ? 'Да' : 'Нет'}
					</h4>
					<h4>
						<span className="text-red-500 font-bold">
							Название:{' '}
						</span>
						{title}
					</h4>
					<div>
						<span className="text-red-500 font-bold">
							Пользователь:{' '}
						</span>
						{userId}
					</div>
				</m.div>
				<Link
					href={`/todos/${id}`}
					className="underline text-right text-pink-500"
				>
					Подробнее
				</Link>
			</LazyMotion>
		</div>
	);
};
