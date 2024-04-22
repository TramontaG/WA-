import { Client } from '../Client';

export default class Label {
	client: Client;
	id!: string;
	name!: string;
	hexColor!: string;

	constructor(client: Client, labelData: Record<string, any>) {
		this.client = client;
		if (labelData) {
			this._patch(labelData);
		}
	}

	_patch(labelData: Record<string, any>) {
		this.id = labelData.id;
		this.name = labelData.name;
		this.hexColor = labelData.hexColor;
	}
	/**
	 * Get all chats that have been assigned this Label
	 * @returns {Promise<Array<Chat>>}
	 */
	async getChats() {
		return this.client.getChatsByLabelId(this.id);
	}
}
