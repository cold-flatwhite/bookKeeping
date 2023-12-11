import { Outlet } from "react-router-dom";
import {Button} from 'antd-mobile'

export default function Layout() {
  return (
    <div>
      <Outlet />
      this is layout
      <Button color="primary">test</Button>
    </div>
  );
}
