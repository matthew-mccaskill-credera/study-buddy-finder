import React from 'react';
import { Provider } from 'react-redux';
import { buildStore } from '../util/redux';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Head from 'next/head';
import { StudyBuddyThemeProvider, createEmotionCache } from '../util/theme';
import { CacheProvider } from '@emotion/react';

let initialState = {};
let store = buildStore(initialState);
const clientSideEmotionCache = createEmotionCache();

const StudyBuddyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
    return (
        <Provider store={ store }>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>My page</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>

                <StudyBuddyThemeProvider>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />

                    <Component {...pageProps} />
                </StudyBuddyThemeProvider>
            </CacheProvider>
        </Provider>
    )
};

export default StudyBuddyApp;