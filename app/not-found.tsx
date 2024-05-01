'use client';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { Frown } from 'lucide-react';

export default function NotFound() {
	return (
		<LazyMotion features={domAnimation}>
			<div className="text-red-500 flex gap-2 justify-center text-lg items-center h-screen">
				<AnimatePresence>
					<m.div
						whileTap={{
							backgroundColor: '#000',
							color: '#fff',
							rotate: 180,
							scale: 0,
							transition: {
								type: 'tween',
								// repeat: Infinity,
								// repeatDelay: 0.6,
								// repeatType: 'mirror',
							},
						}}
						className="p-3 h-[500px] w-[500px] rounded-3xl justify-center items-center flex gap-2 cursor-pointer bg-black"
					>
						Страница не найдена... <Frown size={40} />
					</m.div>
				</AnimatePresence>
			</div>
		</LazyMotion>
	);
}
