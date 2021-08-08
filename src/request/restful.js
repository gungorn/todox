// App Request Class do not use this directly abstract away with some API class //

const axios = require("axios").default;
const qs = require("qs");

class Request {
	/**
	 *
	 * Get Search Query
	 * @static
	 * @param {string} [URL=""]
	 * @param {*} [params={}]
	 * @param {*} [headers={}]
	 * @returns
	 * @memberof Request
	 */
	static async get(URL = "", params = {}, headers = {}) {
		URL = this.baseURL + URL + "?" + qs.stringify(params);
		this.access_token && (headers = { ...headers, Authorization: "Bearer " + this.access_token });
		try {
			console.log("GET :", URL);
			const { data } = await axios.get(URL, { headers });
			return { data };
		} catch (error) {
			console.log("GET_ERROR :", URL);
			return { error: this.__formatError(error) };
		}
	}
	/**
	 *
	 * Post JSON
	 * @static
	 * @param {string} [URL=""]
	 * @param {*} [params={}]
	 * @param {*} [headers={}]
	 * @returns
	 * @memberof Request
	 */
	static async post(URL = "", params = {}, headers = {}) {
		URL = this.baseURL + URL;
		this.access_token && (headers = { ...headers, Authorization: "Bearer " + this.access_token });

		const body = params;
		try {
			console.log("POST :", URL);
			const { data } = await axios.post(URL, body, { headers });
			return { data };
		} catch (error) {
			console.log("POST_ERROR :", URL);
			return { error: this.__formatError(error) };
		}
	}
	/**
	 *
	 * Upload file with multipart/form
	 * @static
	 * @param {string} [URL=""]
	 * @param {*} [params={}]
	 * @param {*} [headers={}]
	 * @returns
	 * @memberof Request
	 */
	static async upload(URL = "", params = {}, headers = {}, onUpload = () => null) {
		URL = this.baseURL + URL;
		this.access_token && (headers = { ...headers, Authorization: "Bearer " + this.access_token });

		const body = this.___jsonToFormData(params);
		try {
			console.log("UPLOAD :", URL);
			const { data } = await axios.post(
				URL,
				body,
				{
					headers,
					onUploadProgress: pE => {
						let percentage;

						const totalLength = pE.lengthComputable ?
							pE.total :
							pE.target.getResponseHeader('content-length') || pE.target.getResponseHeader('x-decompressed-content-length');

						percentage = Math.round((pE.loaded * 100) / totalLength);
						//const percentage = Math.round(progressEvent.loaded * 100 / progressEvent.total);

						onUpload(percentage, pE);
						console.log('onUploadProgress', percentage, pE);
					}
				});
			return { data };
		} catch (error) {
			console.log("UPLOAD_ERROR :", URL);
			return { error: this.__formatError(error) };
		}
	}
	static ___jsonToFormData(data) {
		const formData = new FormData();

		Object.keys(data).forEach(key => {
			let elem = data[key];

			if (typeof elem == "string" || typeof elem == "number" || typeof elem == "boolean") return formData.append(`${key}`, data[key]);
			if (Array.isArray(elem)) return elem.forEach(item => formData.append(`${key}[]`, item));
			if (typeof elem == "object") return formData.append(key, data[key]);

			console.log(`${key} is missing`, typeof elem, elem);
		});

		return formData;
	}
	static __formatError = (error) => {
		if (error.response) return error.response.data;
		return error;
	};
}
export { Request };
