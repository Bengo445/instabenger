"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PostIcon from '@mui/icons-material/AddToPhotos';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/AppRegistration';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleNavigation = (newValue: number, path: string) => {
    setValue(newValue);
    router.push(path);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
      >
        <BottomNavigationAction 
          label="Domov" 
          icon={<HomeIcon />} 
          onClick={() => handleNavigation(0, '/')} 
        />
        <BottomNavigationAction 
          label="Príspevok" 
          icon={<PostIcon />} 
          onClick={() => handleNavigation(1, '/post')} 
        />
        <BottomNavigationAction 
          label="Registrácia" 
          icon={<RegisterIcon />} 
          onClick={() => handleNavigation(2, '/auth/register')} 
        />
        <BottomNavigationAction 
          label="Prihlásenie" 
          icon={<LoginIcon />} 
          onClick={() => handleNavigation(3, '/auth/login')} 
        />
      </BottomNavigation>
    </Box>
  );
}