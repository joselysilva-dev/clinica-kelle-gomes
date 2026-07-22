import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";

export function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}