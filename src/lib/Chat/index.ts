import { Client } from '../Client';

export const CreateChat = (client: Client, data: any) => {
	if (data.isGroup) {
		return new GroupChat(client, data);
	} else {
		return new PrivateChat(client, data);
	}
};

// [TODO]: finish those classes;

class GroupChat {
	constructor(Client: Client, data: any) {}
}
class PrivateChat {
	constructor(Client: Client, data: any) {}
}
