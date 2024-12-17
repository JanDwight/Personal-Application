import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <>
      <div> GuestLayout </div>

      <div className="mt-2">
        <Outlet />
      </div>
    </>
  )
}
