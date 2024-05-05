'use client';

import { UserModel } from '@/lib/types';
import { m, Variants, domAnimation, LazyMotion } from 'framer-motion';
import Link from 'next/link';
import { Tooltip } from '../tooltip';

interface Props extends UserModel {
	index: number;
}

const contentAnimateVariants: Variants = {
	start: {
		opacity: 0,
		x: 100,
	},
	end: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.1 * i,
		},
	}),
};

export const UserListItem = ({
	company,
	address,
	name,
	phone,
	username,
	website,
	id,
	index,
}: Props) => {
	return (
		<div className="flex p-2 flex-col border rounded-lg border-stone-400">
			<LazyMotion features={domAnimation}>
				<m.div
					variants={contentAnimateVariants}
					initial="start"
					whileInView="end"
					custom={index}
					viewport={{ once: true }}
				>
					<h4>
						<span className="text-red-500 font-bold">Имя: </span>
						{name}
					</h4>
					<h4>
						<span className="text-red-500 font-bold">
							Телефон:{' '}
						</span>
						{phone}
					</h4>
					<div>
						<span className="text-red-500 font-bold">
							Никнейм:{' '}
						</span>
						{username}
					</div>
					<div>
						<span className="text-red-500 font-bold">
							Веб-сайт:{' '}
						</span>
						{website}
					</div>
					<div>
						<span className="text-red-500 font-bold">
							Компания:{' '}
						</span>
						{company.name}
					</div>
					<div>
						<span className="text-red-500 font-bold">Город: </span>
						{address.city}
					</div>
				</m.div>
				<Link
					href={`/users/${id}`}
					className="underline ml-auto text-right text-pink-500"
				>
					<Tooltip>Подробнее</Tooltip>
				</Link>
			</LazyMotion>
		</div>
	);
};
