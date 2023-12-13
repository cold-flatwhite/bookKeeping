import { Button, DatePicker, Input, NavBar } from "antd-mobile";
import "../style/new.scss";
import classNames from "classnames";
import { billListData } from "./BillListData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axois from "axios";
import { addBillList } from '../store/modules/billStore'
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { add } from "lodash";

const New = () => {
  const navigate = useNavigate();
  const [billType, setBillType] = useState("pay"); // pay-支出 income-收入
  const [money, setMoney] = useState(0);
  const [date, setDate] = useState(new Date());
  const [usedFor, setUsedFor] = useState("");

  const moneyChange = (value) => {
    setMoney(value);
  };

  const dispatch = useDispatch();

  const saveBill = async () => {
    const data = {
      type: billType,
      money: billType === "pay" ? -money : +money,
      date: date.toISOString(),
      usedFor: usedFor,
    };
    dispatch(addBillList(data))
  };

  const [dateVisible, setDateVisible] = useState(false);
  const dateConfirm = (value) => {
    console.log(value);
    setDate(value);
    setDateVisible(false);
  };
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        New Record
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(billType === "pay" ? "selected" : "")}
            onClick={() => setBillType("pay")}
          >
            Expense
          </Button>
          <Button
            className={classNames(billType === "income" ? "selected" : "")}
            shape="rounded"
            onClick={() => setBillType("income")}
          >
            Income
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <span className="text" onClick={() => setDateVisible(true)}>
                {dayjs(date).format("YYYY-MM-DD")}
              </span>
              <DatePicker
                className="kaDate"
                title="Select Date"
                max={new Date()}
                visible={dateVisible}
                onConfirm={dateConfirm}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={moneyChange}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType].map((item) => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div
                      className={classNames(
                        "item",
                        usedFor === item.type ? "selected" : ""
                      )}
                      key={item.type}
                      onClick={() => setUsedFor(item.type)}
                    >
                      <div className="icon">{item.emoji}</div>
                      <div className="text">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={saveBill}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default New;
