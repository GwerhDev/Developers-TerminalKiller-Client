import Overview from "@/components/Dashboard/Overview";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Developers TerminalKiller | Dashboard - Overview",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Overview />
      </DefaultLayout>
    </>
  );
}
