import { BackBtn } from '@/components/back-btn';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<BackBtn />
			<div className="pb-5">{children}</div>
		</div>
	);
}
