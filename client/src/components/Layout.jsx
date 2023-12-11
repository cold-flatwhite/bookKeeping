import { Outlet } from "react-router-dom";
import {Button} from 'antd-mobile'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "../store/modules/billStore";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBillList());
  },[dispatch])

  return (
    <div>
      <Outlet />
      this is layout
      <Button color="primary">test</Button>
    </div>
  );
}
