import { BackBtn } from '@/components/back-btn';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<header className="bg-slate-200 cursor-pointer transition-all hover:bg-blue-600 hover:text-white py-4 px-10 sticky top-0">
				<BackBtn />
			</header>
			<div className="pb-5">{children}</div>
		</div>
	);
}
