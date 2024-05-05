import { AnimatePresence, motion } from 'framer-motion';
import { PanelTopClose, X } from 'lucide-react';
import { useMemo, useState } from 'react';

export const NewEntity = ({ entity }: { entity: [string, any][] }) => {
	const propsMemo = useMemo(() => entity.toString(), [entity]);
	const [hide, setHide] = useState(false);

	if (!entity.length) return;

	return (
		<motion.div
			layout
			key={propsMemo}
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="bg-emerald-400 p-3 flex flex-col gap-4 overflow-hidden rounded-md"
			// style={{ height: 'fit-content' }}
		>
			<motion.div layout className="flex items-start gap-2">
				<h2 className="text-center font-medium leading-4 text-gray-800">
					Недавно созданный
				</h2>
				<div
					className="bg-slate-300 p-1 rounded-md cursor-pointer transition-colors hover:bg-blue-300"
					onClick={() => setHide((p) => !p)}
				>
					<PanelTopClose />
				</div>
			</motion.div>
			<AnimatePresence mode="popLayout">
				{!hide && (
					<motion.div
						initial={{ opacity: 0, scaleY: 0 }}
						animate={{ opacity: 1, scaleY: 1 }}
						exit={{
							opacity: 0,
							scaleY: 0,
						}}
						style={{ originY: 1 }}
						transition={{ duration: 0.3 }}
					>
						{entity.map(([key, value], i) => (
							<div key={i} className="">
								<span className="text-red-600 font-bold">
									{key}
								</span>
								{' - '}
								{value}
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
