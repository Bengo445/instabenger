// src/app/page.tsx

"use client"

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession(); // Get session data and status

  if (session){
    return (
      <Container>
        <Typography>Home - si prihlásený</Typography>
      </Container>
    );
  }else{
    return (
      <Container>
        <Typography>Home - nie si prihlásený</Typography>
      </Container>
    );
  }
  
}

