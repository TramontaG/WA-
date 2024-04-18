import { BusinessContact, PrivateContact } from '.';

export interface ContactId {
	server: string;
	user: string;
	_serialized: string;
}

export type Contact = BusinessContact | PrivateContact;
