import { Avatar, Box, Input, Modal, Typography } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useState } from 'react';

const InputSection = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Box
        sx={{
          border: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 1,
          maxWidth: 687
        }}
      >
        <Avatar
          src='https://avatars.githubusercontent.com/u/89299893?v=4'
          sx={{
            marginRight: 2
          }}
        />
        <Input
          type='text'
          placeholder='Create memory'
          disableUnderline={true}
          sx={{
            width: '80%',
          }}
          onClick={handleOpenModal}
        />
        <AddPhotoAlternateOutlinedIcon
          sx={{
            color: 'gray',
            padding: 1,
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'lightgray',
              borderRadius: 1
            }
          }}
        />
        <AddLinkIcon
          sx={{
            color: 'gray',
            padding: 1,
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'lightgray',
              borderRadius: 1
            }
          }}
        />

        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box
            sx={{
              position: 'absolute' as 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Input
              type='text'
              placeholder='Create memory'
              disableUnderline={true}
              sx={{
                width: '80%',
              }}
            />
          </Box>
        </Modal>

      </Box>
    </>
  )
}

export default InputSection