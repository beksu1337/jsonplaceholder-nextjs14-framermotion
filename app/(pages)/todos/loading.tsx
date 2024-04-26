import { LoaderCircle } from 'lucide-react';

export default function Loading() {
	return (
		<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<LoaderCircle className="animate-spin text-red-500" size={80} />
		</div>
	);
}
