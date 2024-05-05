import { z } from 'zod';

export const commentScheme = z.object({
	postId: z.coerce.number().positive({ message: 'неверно ало' }),
	id: z.number(),
	name: z.string().min(3, { message: 'Не менее 3 символов' }),
	body: z.string().min(5, { message: 'Не менее 5 символов' }),
	email: z.string().email({ message: 'Не верная почта' }),
});
export const commentSchemeOmited = commentScheme.omit({
	id: true,
	postId: true,
});
export const commentSchemeArr = commentScheme.array();
export type CommentModel = z.infer<typeof commentScheme>;
export type CommentModelForm = z.infer<typeof commentSchemeOmited>;

export const postScheme = z.object({
	title: z.string().min(5, { message: 'Не менее 5 символов' }),
	body: z.string().min(5, { message: 'Не менее 5 символов' }),
	userId: z.coerce.number().positive({ message: 'Не верный ID' }),
	id: z.number(),
});
export const postSchemeOmited = postScheme.omit({ id: true });
export const postSchemeArr = postScheme.array();
export type PostModel = z.infer<typeof postScheme>;
export type PostModelForm = z.infer<typeof postSchemeOmited>;

export interface TodoModel {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

// Users ------------------------
export interface UserModel {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserAddress;
	phone: string;
	website: string;
	company: UserCompany;
}

export interface UserAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: UserGeo;
}

export interface UserGeo {
	lat: string;
	lng: string;
}

export interface UserCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}
// ------------------------------
export type Tuple<T extends {}> = [key: keyof T, value: T[keyof T]][];
