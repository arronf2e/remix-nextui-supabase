import { Outlet } from '@remix-run/react';
import CustomNavbar from '~/components/CustomNavbar';

export default function IndexLayout() {
  return (
    <div>
      <CustomNavbar />
      <Outlet />
    </div>
  )
}