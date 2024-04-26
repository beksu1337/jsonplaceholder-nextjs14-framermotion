export interface CommentModel {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export interface PostModel {
	userId: number;
	id: number;
	title: string;
	body: string;
}

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
export type DataTuple<T> = [key: keyof T, value: T[keyof T]];
