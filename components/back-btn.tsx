'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Variants, m, LazyMotion, domAnimation } from 'framer-motion';

const btnVariants: Variants = {
	start: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			ease: 'linear',
			type: 'tween',
		},
	},
	onHover: {
		x: -50,
		transition: {
			bounce: 0,
		},
	},
};

export const BackBtn = () => {
	const router = useRouter();

	return (
		<LazyMotion features={domAnimation}>
			<header className="bg-slate-200 cursor-pointer transition-all hover:bg-blue-600 hover:text-white px-10 sticky top-0 z-[100]">
				<m.div
					onClick={() => router.back()}
					className="flex py-4 items-center gap-2 justify-center"
					variants={btnVariants}
					initial="start"
					animate="end"
					whileHover="onHover"
				>
					<ArrowLeft /> Вернуться назад
				</m.div>
			</header>
		</LazyMotion>
	);
};
