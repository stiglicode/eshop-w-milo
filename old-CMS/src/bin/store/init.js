import "split-on-steroids";
class InitStore {
	constructor(_id) {
		this.indexLayout = "luIDits_last";
		this.hash;
		this.finalID;
		this.userID = _id;
	}

	setHash() {
		// x17Hash
		let Hash_Heart = new Date().toISOString();
		let hashCoreInitArray = Hash_Heart.steroid_split([
			".",
			"-",
			":",
			"T",
			"Z",
		]).asArray;

		let hashCoreArray = [];

		hashCoreInitArray.forEach(core => {
			const random = Math.floor(Math.random() * 8);
			hashCoreArray.push(hashCoreInitArray[random]);
		});

		return hashCoreArray;
	}

	setValue() {
		let date = new Date().toISOString();
		let rawArray = this.setHash();
		rawArray[3] += "-&-";
		rawArray[5] += "-";
		rawArray[2] += "-";

		rawArray.toString().steroid_split([","]).asString.replace("&", this.userID);

		let result = rawArray
			.toString()
			.steroid_split([","])
			.asString.replace("&", this.userID);

		return (this.finalID = result);
	}

	get index() {
		return this.indexLayout;
	}

	get value() {
		this.setValue();
		return this.finalID;
	}
}

export { InitStore };
