import classNames from "classnames";
import "../style/day.scss";
import { useMemo } from "react";
import { useState } from "react";
const DailyBill = ({ date, billList }) => {
  const dayResult = useMemo(() => {
    const pay = billList
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.money, 0);
    const income = billList
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.money, 0);
    return {
      pay,
      income,
      total: pay + income,
    };
  }, [billList]);

  const [visible, setVisible] = useState(false);
  return (
    <div className={classNames("dailyBill")}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span
            className={classNames("arrow", visible && "expand")}
            onClick={() => setVisible(!visible)}
          ></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">expense</span>
            <span className="money">{dayResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">income</span>
            <span className="money">{dayResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{dayResult.total.toFixed(2)}</span>
            <span className="type">balance</span>
          </div>
        </div>
      </div>
      <div className="billList" style={{ display: visible ? "block" : "none" }}>
        {billList.map((item) => {
          return (
            <div className="bill" key={item.id}>
              <div className="detail">
                <div className="billType">{item.usedFor}</div>
              </div>
              <div className={classNames("money", item.type)}>
                {item.money.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DailyBill;
