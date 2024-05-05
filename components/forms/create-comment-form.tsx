import { Ban, Check, CircleAlert } from 'lucide-react';
import {
	CommentModel,
	CommentModelForm,
	commentSchemeOmited,
} from '@/lib/types';
import { usePostForm } from './hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib';

export const CreateCommentForm = ({
	handleData,
}: {
	handleData: (data: CommentModel) => void;
}) => {
	const {
		errors,
		handleSubmit,
		isSubmitting,
		register,
		onPost,
		touchedFields,
		isValid,
	} = usePostForm<CommentModelForm, CommentModel>({
		handleData,
		endpoint: 'comments',
		scheme: commentSchemeOmited,
	});

	return (
		//------------пока только так-------------

		<form onSubmit={handleSubmit(onPost)}>
			<motion.div key="post-comment-email" className="pb-3 flex flex-col">
				<label
					htmlFor="comment-email"
					className="pl-2 text-sm text-slate-700"
				>
					Почта
				</label>
				<div className="relative">
					<input
						{...register('email')}
						defaultValue=""
						type="email"
						id="comment-email"
						placeholder="Email"
						className={cn(
							'px-4 py-2 pr-10 focus:outline-none border border-transparent bg-slate-100 focus:border-black rounded-md transition-colors',
							{
								'focus:border-red-600 border-red-600':
									errors.email,
							},
							{
								'focus:border-green-600 border-green-600':
									!errors.email && touchedFields.email,
							},
						)}
					/>
					<motion.div className="absolute top-1/2 -translate-y-[12px] right-2">
						{touchedFields.email &&
							(errors.email ? (
								<Ban className="text-red-500" />
							) : (
								<Check className="text-green-500" />
							))}
					</motion.div>
				</div>

				<AnimatePresence mode="popLayout">
					{errors.email && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="text-red-600 text-sm w-full border-red-500 text-center p-1 rounded-b-md flex gap-1 items-center border border-t-0"
						>
							<CircleAlert /> {errors.email.message}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>

			<motion.div
				layout={'preserve-aspect'}
				key="post-comment-name"
				className="pb-3 flex flex-col"
			>
				<label
					htmlFor="comment-name"
					className="pl-2 text-sm text-slate-700"
				>
					Имя
				</label>
				<div className="relative">
					<input
						{...register('name')}
						defaultValue=""
						type="string"
						id="comment-name"
						placeholder="Name"
						className={cn(
							'px-4 py-2 pr-10 focus:outline-none border border-transparent bg-slate-100 focus:border-black rounded-md transition-colors',
							{
								'focus:border-red-600 border-red-600':
									errors.name,
							},
							{
								'focus:border-green-600 border-green-600':
									!errors.name && touchedFields.name,
							},
						)}
					/>
					<motion.div className="absolute top-1/2 -translate-y-[12px] right-2">
						{touchedFields.name &&
							(errors.name ? (
								<Ban className="text-red-500" />
							) : (
								<Check className="text-green-500" />
							))}
					</motion.div>
				</div>

				<AnimatePresence mode="popLayout">
					{errors.name && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="text-red-600 text-sm w-full border-red-500 text-center p-1 rounded-b-md flex gap-1 items-center border border-t-0"
						>
							<CircleAlert /> {errors.name.message}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>

			<motion.div
				layout={'preserve-aspect'}
				key="post-comment-body"
				className="pb-3 flex flex-col"
			>
				<label
					htmlFor="comment-body"
					className="pl-2 text-sm text-slate-700"
				>
					Содержание
				</label>

				<div className="relative">
					<input
						{...register('body')}
						defaultValue=""
						type="string"
						id="comment-body"
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
							(errors.email ? (
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
					layout={'preserve-aspect'}
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
