import { ClipboardCheck, MessagesSquare, Newspaper, User } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
	return (
		<div className="container grid grid-cols-2 h-screen gap-3 py-6">
			<Link href="/comments">
				<div className="bg-orange-400 h-full flex flex-col group justify-center cursor-pointer items-center gap-2">
					<h2 className="group-hover:scale-110 transition-all">
						Comments
					</h2>
					<MessagesSquare
						size={40}
						className="group-hover:scale-110 transition-all"
					/>
				</div>
			</Link>
			<Link href="/posts">
				<div className="bg-green-400 h-full flex flex-col group justify-center cursor-pointer items-center gap-2">
					<h2 className="text-lg group-hover:scale-110 transition-all">
						Posts
					</h2>
					<Newspaper
						size={40}
						className="group-hover:scale-110 transition-all"
					/>
				</div>
			</Link>
			<Link href="/todos">
				<div className="bg-blue-400 flex h-full flex-col group justify-center cursor-pointer items-center gap-2">
					<h2 className="group-hover:scale-110 transition-all">
						Todos
					</h2>
					<ClipboardCheck
						size={40}
						className="group-hover:scale-110 transition-all"
					/>
				</div>
			</Link>
			<Link href="/users">
				<div className="bg-yellow-400 flex h-full flex-col group justify-center cursor-pointer items-center gap-2">
					<h2 className="group-hover:scale-110 transition-all">
						Users
					</h2>
					<User
						size={40}
						className="group-hover:scale-110 transition-all"
					/>
				</div>
			</Link>
		</div>
	);
}
