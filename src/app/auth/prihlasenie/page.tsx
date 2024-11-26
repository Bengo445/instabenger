'use client'; // This page should be client-side

import React from 'react';
import { Button, Container } from '@mui/material';
import { signIn } from 'next-auth/react';

export default function LoginPage() {

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" })
  };

  return (
    <Container>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleLogin}
          fullWidth
        >
          Prihlásiť sa cez Google
        </Button>
    </Container>
  );
}