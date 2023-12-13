import { createSlice } from "@reduxjs/toolkit";
import axois from "axios";

const billStore = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
    addBill(state, action) {
      state.billList.push(action.payload);
    },
  },
});

const { setBillList, addBill } = billStore.actions;

const getBillList = () => {
  return async (dispatch) => {
    try {
      const res = await axois.get(`${process.env.REACT_APP_API_URL}/bill`);
      dispatch(setBillList(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const addBillList = (data) => {
  return async (dispatch) => {
    try {
      const res = await axois.post(
        `${process.env.REACT_APP_API_URL}/bill`,
        data
      );
      dispatch(addBill(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const reducer = billStore.reducer;
export { getBillList, addBillList };
export default reducer;
