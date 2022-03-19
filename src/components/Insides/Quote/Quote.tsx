import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import quoteIcon from './quote-icon.svg';
import TwitterIcon from '@mui/icons-material/Twitter';



export const Quote = () => {

    const [quotes, setQuotes] = useState<any[]>([]);
    const [numberQuote, setNumberQuote] = useState(Math.floor(Math.random() * 100));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getQuotes() {
            return await fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json').then((response) => response.json()).then((data) => setQuotes(data)
            )
        };
        getQuotes();
        setLoading(false)
    }, []);

    const getNewQuote = () => {
        setNumberQuote(Math.floor(Math.random() * 100))
    }
    console.log(loading)


    return (
        <>
            {!loading && <Box
                sx={{
                    border: '1px solid lightgray',
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
                        {quotes[numberQuote]?.quote}
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: 1,
                            marginLeft: 2,
                            marginRight: 2,
                            marginBottom: 2,
                        }}
                    >
                        {quotes[numberQuote]?.author}
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
                            backgroundColor: '#4185ca',
                            color: 'white',
                            cursor: 'pointer',
                            '&:hover': {
                                color: '#4185CA',
                                backgroundColor: 'white',
                                borderColor: '#4185CA'
                            }
                        }}
                        onClick={getNewQuote}
                    >
                        New quote
                    </Typography>
                </Box>
            </Box>}
        </>
    )
}
