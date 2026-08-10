import{Outlet}from"react-router-dom";import Navbar from"@/components/navigation/Navbar";import{Footer}from"@/components/sections/Footer";
export function MainLayout(){return <><Navbar/><main><Outlet/></main><Footer/></>}
