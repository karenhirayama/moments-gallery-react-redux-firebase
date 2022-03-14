import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import InputSection from './InputSection/InputSection';
import { Post } from './Post/Post';


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('post')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot: any) =>
                setPosts(
                    snapshot.docs.map((doc: any) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                ))
    }, []);

    return (
        <Box
            sx={{
                marginTop: 4,
                paddingLeft: 4,
                marginRight: 3
            }}
        >
            <InputSection />
            {posts.map(({ id, data: { message, name, imagePostUrl, photoUrl } }) => (
            <Post 
            key={id}
            name={name}
            message={message}
            imagePostUrl={imagePostUrl}
            photoUrl={photoUrl}
            />
            ))}
        </Box>
    )
}

export default Feed