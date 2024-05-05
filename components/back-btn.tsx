'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
	m,
	LazyMotion,
	domAnimation,
	useInView,
	AnimatePresence,
} from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';

export const BackBtn = () => {
	const router = useRouter();
	const ref = useRef<HTMLElement>(null);
	const isVisible = useInView(ref);
	const [mounted, setMounted] = useState(false);

	useLayoutEffect(() => {
		setMounted(true);
	}, []);

	return (
		<LazyMotion features={domAnimation}>
			<m.header
				ref={ref}
				className="bg-gradient-to-r from-orange-400 to-rose-400 w-full cursor-pointer transition-all hover:bg-blue-600 hover:text-white top-0 z-[100]"
			>
				<m.div
					onClick={() => router.back()}
					className="flex py-4 px-10 items-center text-white gap-2 font-black text-lg justify-end"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					whileHover={{ x: -100 }}
					transition={{ bounce: 0 }}
				>
					<ArrowLeft /> Вернуться назад
				</m.div>
			</m.header>

			<AnimatePresence>
				{!isVisible && mounted ? (
					<m.header
						initial={{ opacity: 0, y: -100 }}
						animate={{
							opacity: 1,
							y: 0,
						}}
						exit={{ opacity: 0, y: -100 }}
						transition={{
							ease: 'linear',
						}}
						className=" w-full z-[200] fixed top-0 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
					>
						<m.div
							onClick={() => router.back()}
							className="flex py-4 px-16 font-black text-lg text-white items-center gap-2 justify-start group"
							initial={{ x: 0, opacity: 1 }}
							whileHover={{
								x: -30,
								opacity: 0.5,
								transition: {
									ease: 'linear',
									repeat: Infinity,
									duration: 0.7,
									repeatType: 'mirror',
								},
							}}
							transition={{
								duration: 0.2,
							}}
						>
							<ArrowLeft className="group-hover:rotate-180 transition-all duration-200" />
							Вернуться назад
						</m.div>
					</m.header>
				) : null}
			</AnimatePresence>
		</LazyMotion>
	);
};
