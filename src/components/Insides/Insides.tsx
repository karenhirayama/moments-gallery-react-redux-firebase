import { Box } from '@mui/material';
import React from 'react';
import { Quote } from './Quote/Quote';

export const Insides = () => {
    return (
        <>
            <Box
            sx={{
                marginTop: 4,
                marginRight: 4,
                position: 'relative',
            }}
            >
                <Quote />
            </Box>
        </>
    )
}
