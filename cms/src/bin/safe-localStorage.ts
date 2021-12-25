const safe_ls = (cb: (store: Storage) => void) => {
	if (typeof Storage !== "undefined") {
		const _store = window.localStorage || localStorage;

		return cb(_store);
	} else {
		throw Error("Sorry, your browser does not support Web Storage...");
	}
};

const SetLocalStorage = (index: string, value: any): void => {
	return safe_ls(store => {
		store.setItem(index, value);
	});
};

const GetLocalStorage = (index: string): any => {
	return safe_ls(store => {
		return store.getItem(index);
	});
};

export { SetLocalStorage, GetLocalStorage };
