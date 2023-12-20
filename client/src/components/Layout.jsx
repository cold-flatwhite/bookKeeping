import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "../store/modules/billStore";
import { TabBar } from "antd-mobile/es/components/tab-bar/tab-bar";
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline,
} from "antd-mobile-icons";
import "../style/layout.scss";

const tabs = [
  {
    key: "/month",
    title: "Monthly",
    icon: <BillOutline />,
  },
  {
    key: "/new",
    title: "New",
    icon: <AddCircleOutline />,
  },
  {
    key: "/year",
    title: "Yearly",
    icon: <CalculatorOutline />,
  },
];

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);

  const switchRoute = (path) =>{
    navigate(path);
  }

  return (
    <div className="kaLayout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar onChange={switchRoute}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
