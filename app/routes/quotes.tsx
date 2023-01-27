import { Link, Outlet } from "@remix-run/react";

export default function () {
  return (
    <>
      <h1>Layout</h1>
      <Link to="/">Home</Link>
      <Outlet />
    </>
  )
}
