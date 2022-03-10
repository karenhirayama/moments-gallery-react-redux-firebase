import { Avatar, Box, Input } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddLinkIcon from '@mui/icons-material/AddLink';

const InputSection = () => {
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
      </Box>
    </>
  )
}

export default InputSection