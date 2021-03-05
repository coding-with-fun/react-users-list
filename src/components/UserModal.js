import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core';

const UserModal = () => {
    const { userDetails, isUserDetailsModalOpen, ToggleUserModal } = useContext(
        UserContext
    );

    const [individualUserDetails, setIndividualUserDetails] = useState();

    useEffect(() => {
        setIndividualUserDetails(userDetails);
    }, [userDetails]);

    const inputDetails = (field, value, className) => {
        return (
            <TextField
                id='outlined-read-only-input'
                label={field}
                defaultValue={value}
                InputProps={{
                    readOnly: true,
                }}
                variant='outlined'
                className={className}
            />
        );
    };

    return (
        <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={isUserDetailsModalOpen}
            onClose={() => ToggleUserModal()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            className='user_modal__container'
        >
            <Fade in={isUserDetailsModalOpen}>
                {individualUserDetails && (
                    <div className='user_details__form'>
                        <div className='name__container'>
                            {inputDetails(
                                'First Name',
                                userDetails.name.first,
                                'first_name'
                            )}
                            {inputDetails(
                                'Last Name',
                                userDetails.name.last,
                                'last_name'
                            )}
                        </div>

                        <div className='contact_details__container'>
                            {inputDetails(
                                'Email Address',
                                userDetails.email,
                                'email_address'
                            )}
                            {inputDetails(
                                'Phone Number',
                                userDetails.phone,
                                'phone_number'
                            )}
                        </div>

                        <div className='location__container'>
                            {inputDetails(
                                'City',
                                userDetails.location.city,
                                'city'
                            )}
                            {inputDetails(
                                'State',
                                userDetails.location.state,
                                'state'
                            )}
                            {inputDetails(
                                'Country',
                                userDetails.location.country,
                                'country'
                            )}
                        </div>
                    </div>
                )}
            </Fade>
        </Modal>
    );
};

export default UserModal;
