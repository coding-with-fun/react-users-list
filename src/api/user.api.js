import Axios from 'axios';

/**
 * @description API to get User details from randomuser.me
 */
export const getUserDetails = async () => {
    const url = 'https://randomuser.me/api?results=500';

    return await Axios.get(url);
};
