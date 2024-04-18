import { Client } from '../Client';

export const CreateContact = (client: Client, data: any) => {
	if (data.isBusiness) {
		return new BusinessContact(client, data);
	} else {
		return new PrivateContact(client, data);
	}
};

// [TODO]: finish those classes;

export class BusinessContact {
	constructor(Client: Client, data: any) {}
}
export class PrivateContact {
	constructor(Client: Client, data: any) {}
}
