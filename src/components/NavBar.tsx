"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PostIcon from '@mui/icons-material/AddToPhotos';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import RegisterIcon from '@mui/icons-material/AppRegistration';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Avatar } from '@mui/material';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession();

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

        {!session ? (
          <BottomNavigationAction 
              label="Registrácia" 
              icon={<RegisterIcon />} 
              onClick={() => handleNavigation(2, '/auth/registracia')} 
          /> 
        ) : (
          <BottomNavigationAction 
              label="Profil" 
              icon={<Avatar src = {session.user?.email || ""}></Avatar>} 
              onClick={() => handleNavigation(2, '/profile')} 
          />
        )}

        {!session ? (
          <BottomNavigationAction 
              label="Prihlásenie" 
              icon={<LoginIcon />} 
              onClick={() => handleNavigation(3, '/auth/prihlasenie')} 
          />
        ) : (
          <BottomNavigationAction 
              label="Odhlásenie" 
              icon={<LogoutIcon />} 
              onClick={() => handleNavigation(3, '/auth/odhlasenie')} 
          />
        )}
        
      </BottomNavigation>
    </Box>
  );
}