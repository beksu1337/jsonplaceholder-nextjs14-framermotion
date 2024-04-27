'use client';

import { UserModel } from '@/utils/types';
import { m, Variants, domAnimation, LazyMotion } from 'framer-motion';
import Link from 'next/link';

interface Props extends UserModel {
	index: number;
}

const contentAnimateVariants: Variants = {
	start: {
		opacity: 0,
		x: 100,
	},
	end: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'tween',
		},
	},
};

export const UserListItem = ({
	company,
	address,
	name,
	phone,
	username,
	website,
	id,
}: Props) => {
	return (
		<div className="flex p-2 flex-col border border-pink-500">
			<LazyMotion features={domAnimation}>
				<m.div
					variants={contentAnimateVariants}
					initial="start"
					whileInView="end"
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
					className="underline text-right text-pink-500"
				>
					Подробнее
				</Link>
			</LazyMotion>
		</div>
	);
};
