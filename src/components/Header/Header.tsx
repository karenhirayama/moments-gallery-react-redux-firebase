import { Avatar, Box, ListItemIcon, Menu, MenuItem } from '@mui/material'
import logo from '../logo.svg';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';

export const Header = () => {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                width: '100vw',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    paddingTop: 2,
                    paddingRight: 4,
                    paddingBottom: 2,
                    paddingLeft: 4,
                    maxWidth: 1050,
                    margin: 'auto',
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
                        }}
                        onClick={handleClick}
                    >
                        <Avatar
                            src={user.user.photoURL}
                        >
                            {user.user.displayName[0]}
                        </Avatar>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 95,
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >

                            <MenuItem
                                onClick={logoutOfApp}
                            >
                                <ListItemIcon>
                                    <LogoutIcon fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
