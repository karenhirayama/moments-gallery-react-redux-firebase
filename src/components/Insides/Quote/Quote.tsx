import React from 'react';
import { Box, createTheme, Typography } from '@mui/material';
import quoteIcon from './quote-icon.svg';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Quote = () => {

    return (
        <Box
            sx={{
                border: '1px solid black',
                borderRadius: 2,
                marginLeft: 4,
                maxWidth: 420,
                backgroundColor: 'white',
            }}
        >
            <Box
                sx={{
                    marginTop: 3,
                    marginLeft: 3,
                    marginRight: 3,
                }}
            >
                <Box>
                    <img src={quoteIcon} alt='quote icon' />
                </Box>
                <Typography
                    sx={{
                        marginTop: 1,
                        marginLeft: 2,
                        marginRight: 2,
                        marginBottom: 2,
                    }}
                >
                    Aliqua aliquip anim consequat tempor et. Sunt ut excepteur est deserunt. Tempor eiusmod sunt eu pariatur incididunt consequat. Esse culpa sunt aliqua ex et sit est magna ex reprehenderit aliqua.
                </Typography>
            </Box>
            <Box
                sx={{
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <TwitterIcon
                    sx={{
                        fontSize: 30,
                        color: '#4185CA',
                        cursor: 'pointer',
                    }}
                />
                <Typography
                    sx={{
                        border: '1px solid white',
                        borderRadius: 1,
                        paddingLeft: 2,
                        paddingRight: 2,
                        paddingTop: 0.4,
                        paddingBottom: 0.4,
                        backgroundColor: '#79b4fd',
                        color: 'white',
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#4185CA',
                            backgroundColor: 'white',
                            borderColor: '#4185CA'
                        }
                    }}
                >
                    New quote
                </Typography>
            </Box>
        </Box>
    )
}
