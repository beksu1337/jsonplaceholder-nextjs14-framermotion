'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const BackBtn = () => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.back()}
			className="flex items-center gap-2 justify-center"
		>
			<ArrowLeft /> Вернуться назад
		</div>
	);
};
