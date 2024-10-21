// app/layout.tsx
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
