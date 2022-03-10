import { Modal, Typography } from '@mui/material'
import React from 'react'

export const ModalInput = (openModal: boolean) => {

    return (
        <>
            <Modal
                open={openModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Typography>
                    Hi
                </Typography>
            </Modal>
        </>
    )
}
