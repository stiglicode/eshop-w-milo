class POST_SCHEMA {
	path: string;
	api: string;
	reqObject: Record<string, unknown>;
	constructor(path: string, api: string, reqObject: Record<string, unknown>) {
		this.path = path;
		this.api = api;
		this.reqObject = reqObject;
	}
}

export { POST_SCHEMA };
