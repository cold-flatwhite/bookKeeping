import { NavBar, DatePicker } from "antd-mobile";
import "../style/month.scss";
import { useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from "lodash";
import { useEffect } from "react";
import DailyBill from "./Day";

export default function Month() {
  const billList = useSelector((state) => state.bill.billList);

  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY-MM"));
  }, [billList]);

  const [dateVisible, setDateVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format("YYYY-MM");
  });
  const onCancel = () => {
    setDateVisible(false);
  };
  const [currentMonthList, setMonthList] = useState([]);
  const monthResult = useMemo(() => {
    if (!currentMonthList || currentMonthList.length === 0) {
      return {
        pay: 0,
        income: 0,
        total: 0,
      };
    }
    const pay = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.money, 0);
    const income = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.money, 0);
    return {
      pay,
      income,
      total: pay + income,
    };
  }, [currentMonthList]);

  useEffect(() => {
    const nowDate = dayjs(new Date()).format("YYYY-MM");
    if (monthGroup[nowDate]) {
      setMonthList(monthGroup[nowDate]);
    }
  }, [monthGroup]);

  const onConfirm = (data) => {
    setDateVisible(false);
    const formatDate = dayjs(data).format("YYYY-MM");
    setMonthList(monthGroup[formatDate]);
    setCurrentDate(formatDate);
  };
  const onClose = () => {
    setDateVisible(false);
  };

  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(currentMonthList, (item) =>
      dayjs(item.date).format("YYYY-MM-DD")
    );
    const key = Object.keys(groupData);
    return { groupData, key };
  }, [currentMonthList]);

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        Monthly Payment & Expense
      </NavBar>
      <div className="content">
        <div className="header">
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{currentDate.toString()} Statement</span>
            <span
              className={classNames("arrow", dateVisible && "expand")}
            ></span>
          </div>
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">expense</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">income</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">balance</span>
            </div>
          </div>
          <DatePicker
            className="kaDate"
            title="bill date"
            precision="month"
            visible={dateVisible}
            onCancel={onCancel}
            max={new Date()}
            onConfirm={onConfirm}
            onClose={onClose}
          />
        </div>
        {
          dayGroup.key.map(key => {
              return  <DailyBill key={key} date={key} billList={dayGroup.groupData[key]}/>
          })
        }
     
      </div>
    </div>
  );
}
