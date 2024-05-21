import axios from 'axios';
import { alert } from '../utils/alerts';

export const helpAxios = async ({
    url,
    method,
    body,
    title,
    icon,
    token,
    loadData = null,
}) => {
    const data = JSON.stringify(body);
    let header = {};
    if (method !== 'DELETE') {
        header = {
            'Content-Type': 'application/json',
        };
    }

    if (token) {
        header['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        method: method,
        maxBodyLength: Infinity,
        url: url,
        headers: header,
        data: data,
    };

    console.log('confi:', config.data);
    try {
        const response = await axios(config);
        alert(title, icon);
        if (loadData) {
            loadData();
        }
        return response.data;
    } catch (error) {
        const errorCodigo = error.response.data.message;
        console.log(errorCodigo);
        console.log(error);
        alert(errorCodigo, 'error');
    }
};
