import { Box, Typography } from '@mui/material';
import React from 'react';


export const LoginApp = () => {

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          background: 'url(https://images.pexels.com/photos/1146709/pexels-photo-1146709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'whitesmoke',
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography>
            Log in
          </Typography>
          <Box>

          </Box>
        </Box>
      </Box>
    </>
  )
}
