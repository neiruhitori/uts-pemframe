// src/app/layout.js
'use client';
import './global.css';
import { AuthProvider } from './../contexts/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
