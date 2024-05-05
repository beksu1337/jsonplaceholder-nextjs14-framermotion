'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const contentVariants: Variants = {
	start: {
		opacity: 0,
	},
	end: (i) => ({
		opacity: 1,
		transition: { delay: 0.15 * i, ease: 'linear' },
	}),
};

export const SingleItemInfo = ({ data }: { data: [string, any][] }) => {
	const [hidden, setHidden] = useState(false);

	const handle = () => {
		setHidden((p) => !p);
	};

	return (
		<motion.div
			layout
			transition={{ duration: 0.5 }}
			className="container border-r border-l gap-4 pt-10 justify-start flex flex-col items-start h-[calc(100vh_-_70px)]"
		>
			<AnimatePresence mode="popLayout">
				{!hidden && (
					<motion.div
						initial={{ originY: 0, scaleY: 0 }}
						animate={{
							opacity: 1,
							scaleY: 1,
						}}
						exit={{ opacity: 0, scaleY: 0 }}
						style={{ originY: 0 }}
						className="bg-lime-300 rounded-lg p-3"
					>
						{data.map(([key, value], i) => (
							<motion.div
								key={i}
								variants={contentVariants}
								initial="start"
								whileInView="end"
								custom={i}
								viewport={{ once: true }}
								className="border-b last:border-none border-black py-2 last:pb-0 first:pt-0"
							>
								<span className="font-bold text-red-500">
									{key} -{' '}
								</span>
								{JSON.stringify(value)}
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<motion.button
				layout
				transition={{ ease: 'easeIn', duration: 0.15 }}
				onClick={handle}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				whileHover={{
					rotate: 90,
					transition: { duration: 0.2 },
				}}
				className="bg-blue-300 text-slate-800 h-10 w-10 rounded-full"
			>
				<X size={36} className="m-auto h-full" />
			</motion.button>
		</motion.div>
	);
};
