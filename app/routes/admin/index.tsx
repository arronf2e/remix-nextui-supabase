import { Outlet } from '@remix-run/react';

export default function AdminLayout() {
  return (
    <div>
      admin layout
      <Outlet />
    </div>
  )
}