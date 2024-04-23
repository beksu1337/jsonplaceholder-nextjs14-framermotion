import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="bg-slate-200 cursor-pointer transition-all hover:bg-blue-600 hover:text-white py-4 px-10">
				<Link
					href="/"
					className="flex items-center gap-2 justify-center"
				>
					<ArrowLeft /> Вернуться на главную
				</Link>
			</header>
			<div>{children}</div>
		</>
	);
}
