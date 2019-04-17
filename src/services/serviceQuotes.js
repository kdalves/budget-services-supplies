import {api} from '../api/api.js';

export const getList = async() => {
    return new Promise(resolve => setTimeout(() => {
        resolve(api)
    },2000))
}