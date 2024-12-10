// components/ThemeProvider.tsx
"use client"

import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Switch, FormControlLabel, Typography } from '@mui/material';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false); // To prevent hydration issue
  
    // Load the saved theme preference from localStorage (if any)
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
      setMounted(true); // Now that we're on the client, we can render the theme
    }, []);
  
    // Update the localStorage when theme is toggled
    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTheme = event.target.checked ? 'dark' : 'light';
      setIsDarkMode(event.target.checked);
      localStorage.setItem('theme', newTheme);
    };
  
    // Define the themes (light and dark)
    const lightTheme = createTheme({
      palette: {
        mode: 'light',
      },
    });
  
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });
  
    // Prevent rendering until the component is mounted
    if (!mounted) {
      return <div />; // Empty div to prevent SSR mismatch
    }
  
    return (
      <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <div style={{ position: 'fixed', top: 10, right: 10 }}>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={handleThemeChange} />}
            label={
                <Typography color="textPrimary"> {/* Dynamically adapt text color */}
                    Dark Mode
                </Typography>
              }
          />
        </div>
        {children}
      </MuiThemeProvider>
    );
  };
  
  export default ThemeProvider;