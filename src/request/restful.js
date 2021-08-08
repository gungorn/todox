import axios from 'axios';

export const endoints = {
    login: {
        method: 'post',
        ep: 'api/admin/login'
    },
    register: {
        method: 'post',
        ep: 'api/admin/register'
    },
    add: {
        method: 'post',
        ep: 'api/product/add'
    },
    restaurantDetails: {
        method: 'get',
        params: ['id'],
        ep: 'api/resturant/restaurantDetails'
    }
};

export const LOGIN = ({ email, password }) => new Promise((resolve, reject) => {
    REQUEST({
        ep: endoints.login,
        data: { email, password }
    })
        .then(resolve)
        .catch(reject);
});

export const REQUEST = ({ ep, params, data }) => new Promise((resolve, reject) => {
    switch (ep.method) {
        case 'get':
            GETAXIOS(ep.ep, params)
                .then(resolve)
                .catch(reject);
            break;

        case 'post':
            POSTAXIOS(ep.ep, data, params)
                .then(resolve)
                .catch(reject);
            break;
    }
});

export const GETAXIOS = (ep, params) => new Promise((resolve, reject) => {
    let url = `${global.BASEURL}/${ep}`;

    if (params) {
        url += '?';
        Object.keys(params).forEach(d => (url += `${d}=${params[d]}&`));
        url = url.substring(0, url.length - 1);
    }

    axios.get(
        url,
        {
            headers: {
                'Authorization': `${global.TOKENTYPE}: ${global.token}`
            }
        }
    )
        .then(response => resolve(response.data))
        .catch(reject);
});

export const POSTAXIOS = (ep, data) => new Promise((resolve, reject) => {
    axios.post(
        `${global.BASEURL}/${ep}`,
        data,
        {
            headers: {
                'Authorization': global.token ? `${global.TOKENTYPE}: ${global.token}` : null
            }
        }
    )
        .then(response => resolve(response.data))
        .catch(reject);
});