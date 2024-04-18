export default class MessageMedia {
	mimetype: string;
	data: string;
	filename?: string;
	filesize?: number;

	constructor(mimetype: string, data: string, filename?: string, filesize?: number) {
		/**
		 * MIME type of the attachment
		 * @type {string}
		 */
		this.mimetype = mimetype;

		/**
		 * Base64 encoded data that represents the file
		 * @type {string}
		 */
		this.data = data;

		/**
		 * Document file name. Value can be null
		 * @type {?string}
		 */
		this.filename = filename;

		/**
		 * Document file size in bytes. Value can be null
		 * @type {?number}
		 */
		this.filesize = filesize;
	}
}
