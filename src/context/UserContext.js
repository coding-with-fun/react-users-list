import React, { createContext, useEffect, useState } from 'react';
import { getUserDetails } from '../api/user.api';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        FetchUserDetails();
    }, []);

    const FetchUserDetails = async () => {
        const userDetailsRes = await getUserDetails();
        const { results } = userDetailsRes.data;

        setUserList([...results]);
    };

    return (
        <UserContext.Provider value={{ userList }}>
            {props.children}
        </UserContext.Provider>
    );
};
