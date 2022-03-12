import { Avatar, Box, Divider, Input, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const InputSection = () => {

  const [openModalInput, setOpenModalInput] = useState(false);

  const handleOpenModalInput = () => {
    setOpenModalInput(true);
  }

  const handleCloseModalInput = () => {
    setOpenModalInput(false);
  }

  return (
    <>
      <Box
        sx={{
          border: '2px solid black',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 1,
          maxWidth: 600,
          marginBottom: 3
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
          placeholder='Create post'
          disableUnderline={true}
          sx={{
            width: '100%',
          }}
          onClick={handleOpenModalInput}
        />
        <Modal
          open={openModalInput}
          onClose={handleCloseModalInput}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box
            sx={{
              position: 'absolute' as 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              borderRadius: 1,
              boxShadow: 24,
              p: 3,
              height: 230
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: 18,
                paddingBottom: 2
              }}
            >
              Create post in your gallery
            </Typography>
            <Divider variant="middle" />
            <Box>
              <TextField
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder='Description'
                variant="standard"
                InputProps={{
                  disableUnderline: false,
                }}
                inputProps={{
                  maxLength: 130,
                }}
                sx={{
                  width: '92%',
                  paddingLeft: 1,
                  paddingRight: 4,
                  margin: 1,
                }}
              />
              <TextField
                id="standard-multiline-static"
                rows={1}
                placeholder='Image URL'
                variant="standard"
                InputProps={{
                  disableUnderline: false,
                }}
                sx={{
                  width: '92%',
                  paddingLeft: 1,
                  paddingRight: 4,
                  margin: 1,
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: 2
              }}
            >
              <Typography
                sx={{
                  cursor: 'pointer',
                  marginRight: 2,
                }}
                onClick={handleCloseModalInput}
              >
                Cancel
              </Typography>
              <Typography
                sx={{
                  cursor: 'pointer',
                  paddingLeft: 2,
                  paddingRight: 2,
                  border: '1px solid blue',
                  borderRadius: 1,
                  marginRight: 2
                }}
              >
                Post
              </Typography>
            </Box>
          </Box>
        </Modal>

      </Box>
    </>
  )
}

export default InputSection