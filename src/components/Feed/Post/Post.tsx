import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { FC } from 'react';
interface StatePost {
    message: string;
    name: string;
    imagePostUrl?: string;
    photoUrl?: string;
}

export const Post: FC<StatePost> = ({message, name, imagePostUrl, photoUrl}) => {

    return (
        <Card
            sx={{
                border: '2px solid lightgray',
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
                    <Avatar
                        src={photoUrl}
                    >
                        {name[0]}
                    </Avatar>
                }
                title={name}
            >
            </CardHeader>

            <CardContent
                sx={{
                    paddingTop: 1
                }}
            >
                <Typography variant="body2">
                    {message}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={imagePostUrl}
                alt={message}
                sx={{
                    borderRadius: '0 0 4px 4px'
                }}
            />
        </Card>
    )
}
