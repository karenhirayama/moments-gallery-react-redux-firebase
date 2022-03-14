import { Avatar, Box, Divider, Input, Modal, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import firebase from 'firebase/compat/app';
import { db } from '../../../firebase/firebase';

interface StateInputValues {
  message: string;
  imagePostURL?: string;
};

const InputSection = () => {

  const user = useSelector(selectUser);

  const [inputValues, setInputValues] = useState<StateInputValues>({
    message: '',
    imagePostURL: '',
  });

  const handleChangeInput = (prop: keyof StateInputValues) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [prop]: event.target.value });
  };

  const sendPost = (e: any) => {
    e.preventDefault();

    db.collection('post').add({
      name: user.user.displayName,
      message: inputValues.message,
      photoUrl: user.user.photoURL || '',
      imagePostUrl: inputValues.imagePostURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  const [openModalInput, setOpenModalInput] = useState(false);

  const handleOpenModalInput = () => {
    setOpenModalInput(true);
  }

  const handleCloseModalInput = () => {
    setOpenModalInput(false);
  };

  return (
    <>
      <Box
        sx={{
          border: '2px solid lightgray',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 1,
          marginBottom: 3,
          backgroundColor: 'white',
        }}
      >
          <Avatar
            sx={{
              marginRight: 2,
              marginLeft: 1,
            }}
            src={user.user.photoURL}
          >
            {user.user.displayName[0]}
          </Avatar>
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
            aria-describedby="keep-mounted-modal-message"
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pl: 2,
                  pr: 2,
                  pb: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 18,
                  }}
                >
                  Create post in your gallery
                </Typography>
                <CloseIcon
                  sx={{
                    cursor: 'pointer',
                    p: 1,
                    '&:hover': {
                      backgroundColor: 'whitesmoke',
                      borderRadius: 5,
                    }
                  }}
                  onClick={handleCloseModalInput}
                />
              </Box>
              <Divider variant="middle" />
              <Box>
                <TextField
                  id="standard-multiline-static"
                  multiline
                  rows={3}
                  placeholder='message'
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
                  value={inputValues.message}
                  onChange={handleChangeInput('message')}
                />
                <TextField
                  id="standard-multiline-static"
                  rows={1}
                  placeholder='Image URL'
                  variant="standard"
                  InputProps={{
                    disableUnderline: false,
                  }}
                  inputProps={{
                    maxLength: 300,
                  }}
                  sx={{
                    width: '92%',
                    paddingLeft: 1,
                    paddingRight: 4,
                    margin: 1,
                  }}
                  value={inputValues.imagePostURL}
                  onChange={handleChangeInput('imagePostURL')}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: 1
                }}
              >
                <Typography
                  sx={{
                    border: '1px solid white',
                    borderRadius: 1,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 0.4,
                    paddingBottom: 0.4,
                    backgroundColor: '#4185ca',
                    color: 'white',
                    cursor: 'pointer',
                    marginRight: 2,
                    '&:hover': {
                      color: '#4185CA',
                      backgroundColor: 'white',
                      borderColor: '#4185CA'
                    }
                  }}
                  onClick={sendPost}
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