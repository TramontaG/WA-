import { Client } from '../Client';
import GroupChat from './GroupChat';
import { PrivateChat } from './PrivateChat';

export const CreateChat = (client: Client, data: any) => {
	if (data.isGroup) {
		return new GroupChat(client, data);
	} else {
		return new PrivateChat(client, data);
	}
};
