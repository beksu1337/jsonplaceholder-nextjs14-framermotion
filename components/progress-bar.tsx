'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';

export const ProgressBar = () => {
	const [mounted, setMounted] = useState(false);

	useLayoutEffect(() => {
		setMounted(true);
	}, []);

	const { scrollYProgress } = useScroll();
	const scale = useSpring(scrollYProgress, { bounce: 0 });
	const bg = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		['rgb(252, 165, 165)', 'rgb(34, 211, 238)', 'rgb(192, 132, 252)'],
	);

	if (!mounted) return;

	return (
		<motion.div
			style={{ originX: 0, scaleX: scale, background: bg }}
			className="w-screen fixed bottom-0 h-4 z-[100]"
		/>
	);
};
