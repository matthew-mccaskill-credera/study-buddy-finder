import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import createCache from '@emotion/cache';

const themeOptions = {
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        fontSize: 14,
        body2: {
            fontSize: 14
        }
    },
    shape: {
        borderRadius: 5,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    marginLeft: 8,
                    marginRight: 8,
                    marginTop: 8,
                    marginBottom: 8,
                    width: '181px',
                    height: '48px',
                },
                outlinedPrimary: {
                    border: '2px solid'
                },
                outlinedSecondary: {
                    border: '2px solid'
                },
            },
        },
    }
};

export const theme = createTheme(themeOptions);

export const StudyBuddyThemeProvider = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export const createEmotionCache = () => createCache({ key: 'css', prepend: true });