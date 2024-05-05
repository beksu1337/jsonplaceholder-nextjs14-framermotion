import { ClipboardCheck, MessagesSquare, Newspaper, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const runtime = 'edge';

export default async function Home() {
	return (
		<div className="container grid grid-cols-2 h-screen gap-3 py-6">
			{/*------------Пока только так------------- */}
			<Link href="/comments" scroll={false} className="group">
				<div className="bg-orange-400 -z-20 relative h-full flex flex-col justify-center cursor-pointer w-full items-center gap-3 object-cover">
					<h2 className="group-hover:scale-125 transition-all">
						Comments
					</h2>
					<MessagesSquare
						size={40}
						className="group-hover:scale-125 transition-all"
					/>

					<Image
						src="https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="comments"
						width={300}
						height={300}
						className="w-full h-full absolute top-0 left-0 -z-20 opacity-0 group-hover:opacity-30 transition-all"
					/>
				</div>
			</Link>
			<Link href="/posts" scroll={false} className="group">
				<div className="bg-green-400 relative -z-20 h-full flex flex-col group justify-center cursor-pointer items-center gap-2">
					<h2 className="text-lg group-hover:scale-125 transition-all">
						Posts
					</h2>
					<Newspaper
						size={40}
						className="group-hover:scale-125 transition-all"
					/>

					<Image
						src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="comments"
						width={300}
						height={300}
						className="w-full h-full absolute top-0 left-0 -z-20 opacity-0 group-hover:opacity-30 transition-all"
					/>
				</div>
			</Link>
			<Link href="/todos" scroll={false} className="group">
				<div className="bg-blue-400 relative -z-20 flex h-full flex-col group justify-center cursor-pointer items-center gap-2">
					<h2 className="group-hover:scale-125 transition-all">
						Todos
					</h2>
					<ClipboardCheck
						size={40}
						className="group-hover:scale-125 transition-all"
					/>
					<Image
						src="https://images.unsplash.com/photo-1573455494060-c5595004fb6c?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="comments"
						width={300}
						height={300}
						className="w-full h-full absolute top-0 left-0 -z-20 opacity-0 group-hover:opacity-30 transition-all"
					/>
				</div>
			</Link>
			<Link href="/users" scroll={false} className="group">
				<div className="bg-yellow-400 flex relative -z-20 h-full flex-col group justify-center cursor-pointer items-center gap-2">
					<h2 className="group-hover:scale-125 transition-all">
						Users
					</h2>
					<User
						size={40}
						className="group-hover:scale-125 transition-all"
					/>
					<Image
						src="https://images.unsplash.com/photo-1485628422839-535cff5a812c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="comments"
						width={300}
						height={300}
						className="w-full h-full absolute top-0 left-0 -z-20 opacity-0 group-hover:opacity-30 transition-all"
					/>
				</div>
			</Link>
		</div>
	);
}
