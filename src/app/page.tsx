// src/app/page.tsx

"use client"

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession(); // Get session data and status
  return (
    <Container>
      <Typography>Home</Typography>
    </Container>
  );
}

