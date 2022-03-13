import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React, { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import logo from '../logo.svg';
interface StateLoginApp {
  email: string;
  password: string;
  showPassword: boolean;
}

interface StateRegister {
  nameUser: string;
  imgUser?: string;
  email: string;
  password: string;
  showPassword: boolean;
}

export const LoginApp = () => {

  const [valuesLoginApp, setValuesLoginApp] = React.useState<StateLoginApp>({
    email: '',
    password: '',
    showPassword: false,
  });

  const [valuesRegisterApp, setValuesRegisterApp] = useState<StateRegister>({
    nameUser: '',
    imgUser: '',
    email: '',
    password: '',
    showPassword: false,
  })

  const [isNewUser, setIsNewUser] = useState(false);

  const handleChangeLoginApp = (prop: keyof StateLoginApp) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuesLoginApp({ ...valuesLoginApp, [prop]: event.target.value });
  };

  const handleChangeRegister = (prop: keyof StateRegister) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuesRegisterApp({ ...valuesRegisterApp, [prop]: event.target.value });
  };


  const handleClickShowPasswordLogin = () => {
    setValuesLoginApp({
      ...valuesLoginApp,
      showPassword: !valuesLoginApp.showPassword,
    });
  };

  const handleClickShowPasswordRegister = () => {
    setValuesRegisterApp({
      ...valuesRegisterApp,
      showPassword: !valuesRegisterApp.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChangeStatusUser = () => {
    const changeIsNewUser = !isNewUser;
    setIsNewUser(changeIsNewUser)
  }

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
            padding: 2,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt='Logo' style={{ width: '4.5rem', marginBottom: '16px' }} />
          {!isNewUser ?
            <>
              <Box>
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">E-mail</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-email"
                      type='email'
                      value={valuesLoginApp.email}
                      onChange={handleChangeLoginApp('email')}
                      endAdornment={
                        <InputAdornment position="end">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      }
                      label="E-mail"
                      inputProps={{
                        maxLength: 100,
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={valuesLoginApp.showPassword ? 'text' : 'password'}
                      value={valuesLoginApp.password}
                      onChange={handleChangeLoginApp('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordLogin}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {valuesLoginApp.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      inputProps={{
                        maxLength: 20,
                      }}
                    />
                  </FormControl>
                  <Typography
                    sx={{
                      m: 1,
                      textAlign: 'center',
                      backgroundColor: '#4185CA',
                      p: 1,
                      borderRadius: 1,
                      border: '1px solid #4185CA',
                      cursor: 'pointer',
                      color: 'whitesmoke',
                      '&:hover': {
                        color: '#4185CA',
                        backgroundColor: 'whitesmoke',
                        borderColor: '#4185CA'
                      }
                    }}
                  >
                    Login
                  </Typography>
                </form>
                <Box>
                  <Typography
                    sx={{
                      m: 1,
                      textAlign: 'center',
                    }}
                  >
                    New here?{" "}
                    <span
                      style={{
                        color: '#4185CA',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                      onClick={handleChangeStatusUser}
                    >Register now!</span>
                  </Typography>
                </Box>
              </Box>
            </>
            :
            <>
              <Box>
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-name">Name*</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-name"
                      type='text'
                      value={valuesRegisterApp.nameUser}
                      onChange={handleChangeRegister('nameUser')}
                      endAdornment={
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      }
                      label="Name"
                      inputProps={{
                        maxLength: 50,
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-photoURL">Photo URL (optional)</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-photoURL"
                      type='text'
                      value={valuesRegisterApp.imgUser}
                      onChange={handleChangeRegister('imgUser')}
                      endAdornment={
                        <InputAdornment position="end">
                          <InsertPhotoIcon />
                        </InputAdornment>
                      }
                      label="Photo URL (optional)"
                      inputProps={{
                        maxLength: 300,
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">E-mail*</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-email"
                      type='email'
                      value={valuesRegisterApp.email}
                      onChange={handleChangeRegister('email')}
                      endAdornment={
                        <InputAdornment position="end">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      }
                      label="E-mail"
                      inputProps={{
                        maxLength: 100,
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={valuesRegisterApp.showPassword ? 'text' : 'password'}
                      value={valuesRegisterApp.password}
                      onChange={handleChangeRegister('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordRegister}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {valuesRegisterApp.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      inputProps={{
                        maxLength: 20,
                      }}
                    />
                  </FormControl>
                  <Typography
                    sx={{
                      m: 1,
                      textAlign: 'center',
                      color: 'whitesmoke',
                      backgroundColor: '#4185CA',
                      p: 1,
                      borderRadius: 1,
                      border: '1px solid #4185CA',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#4185CA',
                        backgroundColor: 'whitesmoke',
                        borderColor: '#4185CA'
                      }
                    }}
                  >
                    Sign in
                  </Typography>
                </form>
                <Box>
                  <Typography
                    sx={{
                      m: 1,
                      textAlign: 'center',
                    }}
                  >
                    Have an account already?{" "}
                    <span
                      style={{
                        color: '#4185CA',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                      onClick={handleChangeStatusUser}
                    >Log in</span>
                  </Typography>
                </Box>
              </Box>
            </>
          }
        </Box>
      </Box>
    </>
  )
}
