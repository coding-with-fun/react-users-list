import React, { createContext, useEffect, useState } from 'react';
import { getUserDetails } from '../api/user.api';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [userList, setUserList] = useState([]);
    const [userDetails, setUserDetails] = useState();
    const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);

    useEffect(() => {
        FetchUserDetails();
    }, []);

    const FetchUserDetails = async () => {
        const userDetailsRes = await getUserDetails();
        const { results } = userDetailsRes.data;

        setUserList([...results]);
    };

    const ToggleUserModal = (value, flag) => {
        setUserDetails(value);
        setIsUserDetailsModalOpen(flag);
    };

    return (
        <UserContext.Provider
            value={{
                userList,
                userDetails,
                isUserDetailsModalOpen,
                ToggleUserModal,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
