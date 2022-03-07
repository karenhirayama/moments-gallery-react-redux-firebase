import { Avatar, Box, Button } from '@mui/material'
import logo from '../logo.svg'


export const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: 'white'
            }}
        >
            <img src={logo} alt='Logo' style={{ width: '4.5rem' }} />
            <Box>
                <Button>
                    <Avatar />
                </Button>
                <Button>
                    Logout
                </Button>
            </Box>
        </Box>
    )
}
