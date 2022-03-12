import { Box, styled } from '@mui/material';
import React from 'react';
import { Quote } from './Quote/Quote';

const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down(760)]: {
        display: 'none'
    }
}));

export const Insides = () => {
    return (
        <>
            <Root>
                <Box
                    sx={{
                        marginTop: 4,
                        marginRight: 4,
                        position: 'relative',
                    }}
                >
                    <Quote />
                </Box>
            </Root>
        </>
    )
}
