import { BackBtn } from '@/components/back-btn';
import { ProgressBar } from '@/components/progress-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<BackBtn />
			<section className="pb-5 container">{children}</section>
			<ProgressBar />
		</main>
	);
}
