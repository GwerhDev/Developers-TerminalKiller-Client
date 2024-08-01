import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import connectDB from "./api/integrations/mongodb";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    console.log("Connecting to MongoDB...");
    const response = await connectDB();
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    return (
      <html lang="en">
        <body suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    );
  };
}
