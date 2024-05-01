import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import { ComponentPropsWithoutRef, useState } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
	children: React.ReactNode;
}

export const Tooltip = ({ children, ...rest }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<LazyMotion features={domAnimation}>
			<div
				className="relative"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				{...rest}
			>
				{children}

				<AnimatePresence>
					{isHovered && (
						<m.div
							className="absolute border bg-slate-400 text-white top-7 left-0 p-3 rounded-md text-center leading-5 text-nowrap text-sm"
							initial={{ opacity: 0, scaleX: 0 }}
							animate={{
								opacity: 1,
								scaleX: 1,
								x: '-50%',
								left: '50%',
							}}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ ease: 'linear', duration: 0.15 }}
						>
							Показать полностью
						</m.div>
					)}
				</AnimatePresence>
			</div>
		</LazyMotion>
	);
};
