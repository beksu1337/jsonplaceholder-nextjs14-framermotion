import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnyZodObject, ZodAny, ZodError, ZodObject } from 'zod';
import { useCallback } from 'react';

export const usePostForm = <M extends {}, T>({
	handleData,
	scheme,
	endpoint,
}: {
	handleData: (data: T) => void;
	scheme: AnyZodObject;
	endpoint: string;
}) => {
	const {
		register,
		reset,
		formState: {
			errors,
			isSubmitting,
			defaultValues,
			isValid,
			touchedFields,
		},
		handleSubmit,
	} = useForm<M>({
		resolver: zodResolver(scheme),
		mode: 'onTouched',
	});

	const onPost = useCallback(
		async (values: M) => {
			try {
				const validated = await scheme.parseAsync(values);

				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
					{
						method: 'POST',
						body: JSON.stringify(validated),
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
						},
					},
				);

				const data = await res.json();
				handleData(data);
				reset();
			} catch (err) {
				if (err instanceof ZodError) {
					throw err;
				} else {
					throw new Error('не судьба');
				}
			}
		},
		[reset],
	);

	return {
		onPost,
		register,
		handleSubmit,
		isSubmitting,
		errors,
		defaultValues,
		isValid,
		touchedFields,
	};
};
