import { PostModel, PostModelForm, postSchemeOmited } from '@/lib/types';
import { Ban, Check, CircleAlert } from 'lucide-react';
import { usePostForm } from './hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib';

export const CreatePostForm = ({
	handleData,
}: {
	handleData: (data: PostModel) => void;
}) => {
	const {
		errors,
		handleSubmit,
		isSubmitting,
		register,
		isValid,
		touchedFields,
		onPost,
	} = usePostForm<PostModelForm, PostModel>({
		handleData,
		endpoint: 'posts',
		scheme: postSchemeOmited,
	});

	return (
		//---------пока только так------------

		<form onSubmit={handleSubmit(onPost)}>
			<motion.div key="post-user-id" className="pb-3 flex flex-col">
				<label
					htmlFor="post-userid"
					className="pl-2 text-sm text-slate-700"
				>
					ID Пользователя
				</label>
				<div className="relative">
					<input
						{...register('userId')}
						defaultValue=""
						type="number"
						id="post-userid"
						placeholder="User ID"
						className={cn(
							'px-4 py-2 pr-10 focus:outline-none border border-transparent bg-slate-100 focus:border-black rounded-md transition-colors',
							{
								'focus:border-red-600 border-red-600':
									errors.userId,
							},
							{
								'focus:border-green-600 border-green-600':
									!errors.userId && touchedFields.userId,
							},
						)}
					/>
					<motion.div className="absolute top-1/2 -translate-y-[12px] right-2">
						{touchedFields.userId &&
							(errors.userId ? (
								<Ban className="text-red-500" />
							) : (
								<Check className="text-green-500" />
							))}
					</motion.div>
				</div>

				<AnimatePresence mode="popLayout">
					{errors.userId && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="text-red-600 text-sm w-full border-red-500 text-center p-1 rounded-b-md flex gap-1 items-center border border-t-0"
						>
							<CircleAlert /> {errors.userId.message}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>

			<motion.div
				key="title"
				layout={'preserve-aspect'}
				className="pb-3 flex flex-col"
			>
				<label
					htmlFor="post-title"
					className="pl-2 text-sm text-slate-700"
				>
					Название поста
				</label>
				<div className="relative">
					<input
						{...register('title')}
						type="text"
						id="post-title"
						placeholder="Title"
						className={cn(
							'px-4 py-2 pr-10 focus:outline-none border border-transparent bg-slate-100 focus:border-black rounded-md transition-colors',
							{
								'focus:border-red-600 border-red-600':
									errors.title,
							},
							{
								'focus:border-green-600 border-green-600':
									!errors.title && touchedFields.title,
							},
						)}
					/>
					<motion.div className="absolute top-1/2 -translate-y-[12px] right-2">
						{touchedFields.title &&
							(errors.title ? (
								<Ban className="text-red-500" />
							) : (
								<Check className="text-green-500" />
							))}
					</motion.div>
				</div>
				<AnimatePresence mode="popLayout">
					{errors.title && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="text-red-600 text-sm w-full border-red-500 text-center p-1 rounded-b-md flex gap-1 items-center border border-t-0"
						>
							<CircleAlert /> {errors.title.message}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>

			<motion.div
				key="body"
				layout={'preserve-aspect'}
				className="pb-3 flex flex-col"
			>
				<label
					htmlFor="post-body"
					className="pl-2 text-sm text-slate-700"
				>
					Содержание поста
				</label>
				<div className="relative">
					<input
						{...register('body')}
						type="text"
						id="post-body"
						placeholder="Body"
						className={cn(
							'px-4 py-2 pr-10 focus:outline-none border border-transparent bg-slate-100 focus:border-black rounded-md transition-colors',
							{
								'focus:border-red-600 border-red-600':
									errors.body,
							},
							{
								'focus:border-green-600 border-green-600':
									!errors.body && touchedFields.body,
							},
						)}
					/>
					<motion.div className="absolute top-1/2 -translate-y-[12px] right-2">
						{touchedFields.body &&
							(errors.body ? (
								<Ban className="text-red-500" />
							) : (
								<Check className="text-green-500" />
							))}
					</motion.div>
				</div>
				<AnimatePresence mode="popLayout">
					{errors.body && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="text-red-600 text-sm w-full border-red-500 text-center p-1 rounded-b-md flex gap-1 items-center border border-t-0"
						>
							<CircleAlert /> {errors.body.message}
						</motion.div>
					)}
				</AnimatePresence>

				<motion.button
					layout
					type="submit"
					disabled={!isValid || isSubmitting}
					className="bg-blue-500 mt-4 hover:bg-blue-600 transition-colors text-blue-100 px-4 py-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
				>
					Создать
				</motion.button>
			</motion.div>
		</form>
	);
};
