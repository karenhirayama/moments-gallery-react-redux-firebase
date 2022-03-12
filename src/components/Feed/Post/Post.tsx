import { Image } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const Post = () => {
    return (
        <Card
            sx={{
                border: '2px solid black',
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 615,
                marginBottom: 3
            }}
        >
            <CardHeader
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: 1
                }}
                avatar={
                    <Avatar aria-label="recipe">
                        R
                    </Avatar>
                }
                title="Karen Mayumi Hirayama"
            >
            </CardHeader>

            <CardContent
                sx={{
                    paddingTop: 1
                }}
            >
                <Typography variant="body2">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image="https://imgs.search.brave.com/dDYthCmKymqO_k02N0l-Uifue5vL3YRCvCBVqW-CiuE/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9jZG4u/YXVkbGV5dHJhdmVs/LmNvbS8tLy0vNzkv/MTgxMDI0MTEwMTgz/MTEyMTcwMjQ3MTQ3/MDU4MTY2MjEyMDc4/MDA4MTE2MjM4MjIx/LmpwZw"
                alt="Paella dish"
                sx={{
                    borderRadius: '0 0 4px 4px'
                }}
            />
        </Card>
    )
}
