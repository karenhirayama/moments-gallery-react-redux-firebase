import { Avatar, Box, Typography } from '@mui/material'
import logo from '../logo.svg';
import LogoutIcon from '@mui/icons-material/Logout';


export const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',
                marginTop: 1
            }}
        >
            <img src={logo} alt='Logo' style={{ width: '4.5rem' }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 2
                    }}
                >
                    <Avatar
                        src='https://avatars.githubusercontent.com/u/89299893?v=4'
                    />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 2
                }}
            >
                <LogoutIcon
                    sx={{
                        fontSize: 32
                    }}
                />
                <Typography
                    sx={{
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: 10,
                        fontWeight: 400
                    }}
                >
                    Sing out
                </Typography>
            </Box>
        </Box>
        </Box >
    )
}
