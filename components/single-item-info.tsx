'use client';
import { motion, Variants } from 'framer-motion';

const contentVariants: Variants = {
	start: {
		opacity: 0,
	},
	end: (i) => ({
		opacity: 1,
		transition: { delay: 0.1 * i, ease: 'linear' },
	}),
};

export const SingleItemInfo = ({ data }: { data: [string, any][] }) => {
	return (
		<div className="container border-r border-l gap-4 pt-10 justify-start flex flex-col items-start h-[calc(100vh_-_70px)]">
			{data.map(([key, value], i) => (
				<motion.div
					key={i}
					variants={contentVariants}
					initial="start"
					animate="end"
					custom={i}
				>
					<span className="font-bold text-red-500">{key} - </span>
					{JSON.stringify(value)}
				</motion.div>
			))}
		</div>
	);
};
