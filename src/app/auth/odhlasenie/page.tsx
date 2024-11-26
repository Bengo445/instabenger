'use client'; // This page should be client-side

import { signOut } from 'next-auth/react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Log out without redirecting immediately
    router.push('/'); // Redirect to login page after logging out
  };

  return (
    <Container maxWidth="sm">
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Odhlásenie
      </Button>
    </Container>
  );
}