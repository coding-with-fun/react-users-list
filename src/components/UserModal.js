import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core';

const UserModal = () => {
    const { userDetails, isUserDetailsModalOpen, ToggleUserModal } = useContext(
        UserContext
    );

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
                <div>
                    <TextField
                        id='outlined-read-only-input'
                        label='Read Only'
                        defaultValue='Hello World'
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='outlined'
                    />
                </div>
            </Fade>
        </Modal>
    );
};

export default UserModal;
