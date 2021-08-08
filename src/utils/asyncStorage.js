import AsyncStorage from '@react-native-async-storage/async-storage';
//import { shallowEqual } from 'react-redux';
//import store from '~/store';

export const asyncStorageKeys = {
	appFirstStartTime: 'appFirstStartTime',
	userSecret: 'userSecret',
};

export const setAsync = (key, value, ok = () => null, error = () => null) => new Promise(resolve => {
	AsyncStorage
		.setItem(key, JSON.stringify({ key, value }))
		.then(() => {
			console.log('>>>> setAsync <<<<', key, value);
			ok();
			resolve(true);
		})
		.catch(e => {
			error(e);
			resolve(false);
			console.log('>>>> setAsync ERROR <<<<', key, value, e);
		});
});

export const getAsync = (key, ok = () => null, error = () => null) => new Promise(resolve => {
	AsyncStorage
		.getItem(key)
		.then(d => {
			console.log('>>>> getAsync <<<<', key, d);

			try {
				ok(JSON.parse(d).value);
				resolve(JSON.parse(d).value);
			} catch (error) {
				ok(d);
				resolve(d);
			}
		})
		.catch(e => {
			error(e);
			resolve(undefined);
			console.log('>>>> getAsync ERROR <<<<', key, e);
		});
});


//export const REDUX_PERSIST_STORAGE = AsyncStorage;

/*
let setCount = 1, getCount = 1, logging = false;
export const REDUX_PERSIST_STORAGE = {
	...AsyncStorage,
	setItem: (k, v) => new Promise((resolve, reject) => {
		if (logging) {
			console.time('persist_SET_TIME');
			console.log('------- PERSIST_SET -------', setCount);
			console.log({ k, v });
		}

		if (shallowEqual(JSON.parse(v), store.getState().user)) {
			console.timeEnd('persist_SET_TIME');
			console.log('-------- ABORTED ----------');
			return;
		}

		AsyncStorage.setItem(k, v)
			.then(() => {
				if (logging) {
					console.timeEnd('persist_SET_TIME');
					console.log('---------------------------');
					setCount++;
				}

				resolve();
			})
			.catch(e => {
				if (logging) {
					console.log('---------------------------');
					setCount++;
				}

				reject(e);
			});
	}),
	getItem: (k) => new Promise(async (resolve, reject) => {
		if (logging) {
			console.time('persist_GET_TIME');
			console.log('------- PERSIST_GET -------', getCount);
		}

		AsyncStorage.getItem(k)
			.then(d => {
				if (logging) {
					console.timeEnd('persist_GET_TIME');
					console.log({ k, v: d });
					console.log('---------------------------');
					getCount++;
				}

				resolve(d);
			})
			.catch(e => {
				if (logging) {
					console.log('---------------------------');
					getCount++;
				}

				reject(e);
			});
	})
};
	*/
