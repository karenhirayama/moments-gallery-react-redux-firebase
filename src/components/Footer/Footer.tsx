import { Box, Link, Typography } from "@mui/material"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center'
      }}
    >
      <Typography mr={2}>
        Create by Karen Mayumi Hirayama
      </Typography>
      <FiberManualRecordIcon sx={{fontSize: 10}} />
      <Link href="https://github.com/karenhirayama/moments-gallery-react-redux-firebase" target='_blank'
        sx={{
          textDecoration: 'none',
          color: 'black',
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        }}
        ml={2}
      >
        Link to repository
      </Link>
    </Box>
  )
}
