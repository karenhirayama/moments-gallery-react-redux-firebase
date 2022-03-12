import { Box } from '@mui/material';
import InputSection from './InputSection/InputSection';
import { Post } from './Post/Post';

function Feed() {


    return (
        <Box
            sx={{
                marginTop: 4,
                paddingLeft: 4,
            }}
        >
            <InputSection />
            <Post />
            <Post />
        </Box>
    )
}

export default Feed