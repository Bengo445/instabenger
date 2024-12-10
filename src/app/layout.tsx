// src/app/layout.tsx

import "./globals.css";
import NavBar from "@/components/NavBar";
import AuthProvider from "@/components/AuthProvider";
import ThemeProvider from '@/components/ThemeProvider';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <AuthProvider>
      <ThemeProvider>
        <body>
          <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <main style={{ flexGrow: 1 }}>
            {children}
            </main>
          </div>
          <NavBar />
        </body>
      </ThemeProvider>
    </AuthProvider>
    </html>
  );
}