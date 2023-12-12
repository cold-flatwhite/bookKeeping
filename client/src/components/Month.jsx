import { NavBar, DatePicker } from "antd-mobile";
import "../style/month.scss";
import { useState } from "react";

export default function Month() {
  const [dateVisible, setDateVisible] = useState(false)
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        Monthly Payment & Expense
      </NavBar>
      <div className="content">
        <div className="header">
          <div className="date" onClick={()=>setDateVisible(true)}>
            <span className="text">2023 | March</span>
            <span className="arrow expand"></span>
          </div>
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">expense</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">income</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">expense</span>
            </div>
          </div>
          <DatePicker
            className="kaDate"
            title="bill date"
            precision="month"
            visible={dateVisible}
            max={new Date()}
          />
        </div>
      </div>
    </div>
  );
}
